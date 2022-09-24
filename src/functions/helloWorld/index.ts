import { S3 } from 'aws-sdk';

export async function handler(event?: S3) {
  console.log('Invoking Lambda Function: ', event);
}
