import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CreateRequestComponent } from './create-request/create-request.component';
export const routes: Routes = [
{
    path: '',
    redirectTo: '/create-request',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegisterComponent
},
{
    path: 'dashboard',
    component: DashboardComponent
},
{
    path: 'create-request',
    component: CreateRequestComponent
},  
];
