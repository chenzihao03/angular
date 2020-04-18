import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from '../../model/basic/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {hidden: true}
  },
  {
    path: '/main',
    component: HomeComponent,
    data: {title: '首页'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
