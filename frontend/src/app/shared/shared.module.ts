import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent
    
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SharedModule { }
