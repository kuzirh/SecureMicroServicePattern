#!/usr/bin/env node
import 'source-map-support/register';
import { Stack } from 'aws-cdk-lib';
import { HelloWorld } from '../lib/helloWorld';

const stack = new Stack();
new HelloWorld(stack, 'HellowWorldStack');
