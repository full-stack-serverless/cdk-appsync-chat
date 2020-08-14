#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkAppsyncChatStack } from '../lib/cdk-appsync-chat-stack';

const app = new cdk.App();
new CdkAppsyncChatStack(app, 'CdkAppsyncChatStack');
