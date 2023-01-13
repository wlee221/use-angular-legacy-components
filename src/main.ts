import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Amplify, Logger } from 'aws-amplify';

import { AppModule } from './app/app.module';
import awsconfig from './aws-exports.js';

Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure(awsconfig);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
