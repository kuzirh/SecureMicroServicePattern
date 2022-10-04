import { Stack, aws_lambda as lambda } from 'aws-cdk-lib';
import { Lambda } from '../constructs/lambda';
import { resolve } from 'path';
export class HelloWorld extends Stack {
  constructor(scope: Stack, id: string) {
    super(scope, id);

    new Lambda(this, 'helloWorld', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset(resolve('./build/functions/helloWorld')),
      handler: 'index.handler',
    });
  }
}
