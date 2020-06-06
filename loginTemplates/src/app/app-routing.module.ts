import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLoginComponent } from './login/basic-login/basic-login.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'login/basic', component: BasicLoginComponent},
  { path: 'admin/dashboard/:user', component: AdminDashboardComponent },
  { path: '**', component: NotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
