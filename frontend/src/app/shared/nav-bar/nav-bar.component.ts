import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from '../../user/auth.service';
import { log } from 'console';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  mainMenuItem:string[];
  mainMenulink: string[];
  search:string| undefined;
  // isUserLoggedIn: boolean = false;
  role!:any;
  
  constructor(public authService:AuthService){
    this.mainMenuItem=['About Us','Contact'];
    this.mainMenulink=['/about','/contact'];
    this.role=authService.getUserRole()

    
  }
  logout(){
    this.authService.logout();
  }
}
