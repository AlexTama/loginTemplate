import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLoginComponent } from './login/basic-login/basic-login.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLoginComponent,
    NotFoundComponent,
    WelcomeComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
