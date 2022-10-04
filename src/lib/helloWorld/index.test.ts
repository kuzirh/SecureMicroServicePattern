import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HelloWorld } from '../helloWorld/index';

describe('#HelloWorld Stack', () => {
  test('Only one lambda function should be created', () => {
    const app = new App();
    // WHEN
    const helloWorldStack = new HelloWorld(app, 'MyHelloWorldTestStack');
    // THEN
    const template = Template.fromStack(helloWorldStack);
    template.resourceCountIs('AWS::Lambda::Function', 1);
  });
});
