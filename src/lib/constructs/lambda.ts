import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';

export class Lambda extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const lambdaConfig = {
      runtime: lambda.Runtime.NODEJS_16_X,
    };
    const commonLambda = new lambda.Function(
      this,
      'placeholder-name',
      lambdaConfig
    );
  }
}
