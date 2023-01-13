import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular-v2/legacy';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmplifyAuthenticatorModule, LegacyAmplifyUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
