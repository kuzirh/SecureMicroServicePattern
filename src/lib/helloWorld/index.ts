import { aws_lambda as lambda, App, Stack } from 'aws-cdk-lib';
import { Lambda } from '../constructs/lambda';
import { resolve } from 'path';

export class HelloWorld extends Stack {
  constructor(scope: App, id: string) {
    super(scope);
    new Lambda(this, 'helloWorld', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset(
        resolve('../src/build/functions/helloWorld/')
      ),
      handler: 'index.handler',
    });
  }
}
