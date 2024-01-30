import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [{
    path: 'loginpage',
    component: LoginComponent
}, {
    path: '',
    component: DashboardComponent
}];
