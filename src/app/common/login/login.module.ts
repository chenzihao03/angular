import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {
}
