import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HelloWorld } from '../helloWorld/index';

class Test {
  withTemplate() {
    const app = new App();
    const helloWorldStack = new HelloWorld(app);
    return Template.fromStack(helloWorldStack);
  }
}

describe('#HelloWorld Stack', () => {
  test('Only one lambda function should be created', () => {
    const template = new Test().withTemplate();
    template.resourceCountIs('AWS::Lambda::Function', 1);
  });

  test('S3 Bucket should be created', () => {
    const template = new Test().withTemplate();
    template.resourceCountIs('AWS::S3::Bucket', 1);
  });

  test('S3 Bucket should be created with proper security configurations', () => {
    const app = new App();
    const helloWorkStack = new HelloWorld(app);
    const template = Template.fromStack(helloWorkStack);
    template.hasResourceProperties('AWS::S3::Bucket', {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
      VersioningConfiguration: {
        Status: 'Enabled',
      },
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: 'AES256',
            },
          },
        ],
      },
    });
  });

  test('DDB Table should be created', () => {
    const template = new Test().withTemplate();
    template.resourceCountIs('AWS::DynamoDB::Table', 1);
  });
});
