import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule,routingComponents } from './app.router';
import { LoginRouteModules,LoginRoutes} from './login-component/login-router';

import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import {DashboardRoutes,DashboardRoutesComponent} from './dashboard/dashboard.router';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginRoutes,
    DashboardRoutesComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    LoginRouteModules,
    DashboardRoutes,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
}) 
export class AppModule {
 }
