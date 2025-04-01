import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from '../../user/auth.service';
import { log } from 'console';
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
  
  
  constructor(public authService:AuthService){
    this.mainMenuItem=['About Us','Contact'];
    this.mainMenulink=['/about','/contact'];
  }
  logout(){
    this.authService.logout();
  }
}
