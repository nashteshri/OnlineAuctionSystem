import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProfileComponent } from './profile/profile.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    AdminComponent,
    ProfileComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ProgressSpinnerModule,
    ButtonModule,
    FormsModule
  ]
})
export class UserModule { }
