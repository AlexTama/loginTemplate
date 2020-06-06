import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLoginComponent } from './login/basic-login/basic-login.component';


const routes: Routes = [
  { path: 'login/basic', component: BasicLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
