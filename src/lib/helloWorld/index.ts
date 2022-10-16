import { aws_lambda as lambda, App, Stack } from 'aws-cdk-lib';
import { Lambda } from '../constructs/lambda';
import { S3 } from '../constructs/s3';
import { resolve } from 'path';

export class HelloWorld extends Stack {
  constructor(scope: App) {
    super(scope);
    //checkov:skip=CKV_AWS_117:Function needs access to DDB, cannot be in VPC
    new Lambda(this, 'helloWorld', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset(
        resolve('../src/build/functions/helloWorld/')
      ),
      handler: 'index.handler',
    });

    new S3(this, 'buckets');
  }
}
