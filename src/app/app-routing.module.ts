import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './model/basic/home/home.component';
import {MainComponent} from './model/main.component';

export const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/home',
      data: {title: '首页', hidden: true}
    },
    {
      path: 'home',
      component: HomeComponent,
      data: {title: '首页'}
    },
    {
      path: 'main',
      component: MainComponent,
      data: {title: '测试'},
      children: [{
        path: 'home',
        component: HomeComponent,
        data: {title: '首页'}
      }]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
