import {
  aws_lambda as lambda,
  aws_dynamodb as ddb,
  App,
  Stack,
} from 'aws-cdk-lib';
import { Lambda } from '../constructs/lambda';
import { S3 } from '../constructs/s3';
import { DDB } from '../constructs/ddb';
import { resolve } from 'path';

export class HelloWorld extends Stack {
  constructor(scope: App) {
    super(scope);
    new Lambda(this, 'helloWorld', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset(
        resolve('../src/build/functions/helloWorld/')
      ),
      handler: 'index.handler',
    });

    new S3(this, 'buckets');

    new DDB(this, 'table', {
      partitionKey: { name: 'sender', type: ddb.AttributeType.STRING },
    });
  }
}
