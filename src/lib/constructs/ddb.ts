import { Construct } from 'constructs';
import { aws_dynamodb as ddb } from 'aws-cdk-lib';
import { TableProps } from 'aws-cdk-lib/aws-dynamodb';

export class DDB extends Construct {
  constructor(scope: Construct, id: string, props: TableProps) {
    super(scope, id);

    const ddbConfig = {
      ...props,
      encryption: ddb.TableEncryption.CUSTOMER_MANAGED,
      pointInTimeRecovery: true,
    };
    new ddb.Table(this, 'placeholder', ddbConfig);
  }
}
