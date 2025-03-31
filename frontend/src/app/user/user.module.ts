import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ProgressSpinnerModule,
    ButtonModule
  ]
})
export class UserModule { }
