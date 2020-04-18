import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginAuthService} from './common/login/login-auth.service';
import {AuthService} from './common/login/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
