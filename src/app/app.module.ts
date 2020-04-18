import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginAuthService} from './common/login/login-auth.service';
import {AuthService} from './common/login/auth.service';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule, registerLocaleData} from '@angular/common';
import {IconsProviderModule} from './icons-provider.module';
import {HttpClientModule} from '@angular/common/http';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './model/basic/home/home.component';
import {LayoutComponent} from './common/layout/layout.component';
import {MainComponent} from './model/main.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgZorroAntdModule,
    IconsProviderModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    LoginAuthService,
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
