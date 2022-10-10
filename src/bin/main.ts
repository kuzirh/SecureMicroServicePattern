#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { HelloWorld } from '../lib/helloWorld';
const app = new App();
new HelloWorld(app);
