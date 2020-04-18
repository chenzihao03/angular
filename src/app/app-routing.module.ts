import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './common/login/auth.service';

export const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/myhome',
  //   data: {title: '首页', hidden: true}
  // }, {
  //   path: 'myhome',
  //   loadChildren: './common/layout/layout.module#LayoutModule',
  //   data: {title: '首页', hidden: true}
  // }, {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: {title: '首页'}
  // }, {
  //   path: 'main',
  //   component: MainComponent,
  //   data: {title: '测试'},
  //   children: [{
  //     path: 'home',
  //     component: HomeComponent,
  //     data: {title: '首页'}
  //   }]
  // }
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
    data: {title: '首页', hidden: true},
    canActivate: [AuthService]
  },
  {
    path: 'home',
    loadChildren: () => import('./common/layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthService]
  },
  {
    path: 'login',
    loadChildren: () => import('./common/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
