import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';

// interface S3Props {}

export class S3 extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const s3Config = {};

    new s3.Bucket(this, 'placeholder', s3Config);
  }
}
