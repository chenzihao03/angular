import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './common/login/auth.service';
import {LayoutComponent} from './common/layout/layout.component';
import {HomeComponent} from './model/basic/home/home.component';
import {MainComponent} from './model/main.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/layout/home',
    canActivate: [AuthService],
    data: {
      hidden: true
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./common/login/login.module').then(m => m.LoginModule),
    data: {
      hidden: true
    }
  },
  {
    path: 'layout',
    component: LayoutComponent,
    data: {
      title: '系统管理',
      icon: 'dashboard',
      hidden: false
    },
    children: [{
      path: 'home',
      component: HomeComponent,
      data: {
        title: '主页',
        hidden: false
      }
    }, {
      path: 'test',
      component: MainComponent,
      data: {
        title: '測試',
        hidden: false
      }
    }],
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
