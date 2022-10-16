import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { HelloWorld } from '../helloWorld/index';

describe('#HelloWorld Stack', () => {
  test('Only one lambda function should be created', () => {
    const app = new App();
    // WHEN
    const helloWorldStack = new HelloWorld(app);
    // THEN
    const template = Template.fromStack(helloWorldStack);
    template.resourceCountIs('AWS::Lambda::Function', 1);
  });

  test('S3 Bucket should be created', () => {
    const app = new App();
    const helloWorkStack = new HelloWorld(app);
    const template = Template.fromStack(helloWorkStack);
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
});
