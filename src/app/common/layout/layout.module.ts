import {NgModule} from '@angular/core';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  imports: [LayoutRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [LayoutComponent],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
