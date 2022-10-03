import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';

interface LambdaProps {
  codePath: string
}
require('../../build/functions/helloWorld')
export class Lambda extends Construct {
  constructor(scope: Construct, id: string, props: LambdaProps) {
    super(scope, id);

    const lambdaConfig = {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset(props.codePath),
      handler: 'index.handler'
    };


    const commonLambda = new lambda.Function(
      this,
      'placeholder-name',
      lambdaConfig
    );
  }
}
