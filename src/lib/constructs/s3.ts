import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { BucketEncryption } from 'aws-cdk-lib/aws-s3';

// interface S3Props {}

export class S3 extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const s3Config = {
      blockPublicAccess: {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      },
      versioned: true,
      encryption: BucketEncryption.S3_MANAGED,
    };

    new s3.Bucket(this, 'placeholder', s3Config);
  }
}
