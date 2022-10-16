import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';

interface LambdaProps {
  runtime: lambda.Runtime;
  code: lambda.Code;
  handler: string;
}

export class Lambda extends Construct {
  constructor(scope: Construct, id: string, props: LambdaProps) {
    super(scope, id);

    const lambdaConfig = {
      runtime: props.runtime,
      code: props.code,
      handler: props.handler,
      reservedConcurrentExecutions: 100,
    };

    new lambda.Function(this, 'placeholder', lambdaConfig);
  }
}
