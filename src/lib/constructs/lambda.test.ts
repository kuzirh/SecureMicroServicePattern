import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as HelloWorld from '../helloWorld/index';
describe('#HelloWorld Stack', () => {
  test('Only one lambda function should be created', () => {
    const stack = new Stack();
    // WHEN
    const helloWorldStack = new HelloWorld.HelloWorld(
      stack,
      'MyHelloWorldTestStack'
    );
    // THEN
    const template = Template.fromStack(helloWorldStack);
    template.resourceCountIs('AWS::Lambda::Function', 1);
  });
});
