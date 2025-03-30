import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Router } from 'express';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl ='http://localhost:3000/api';

  constructor(private http:HttpClient,private router:Router) {}

  register(userData:any):Observable<any>{
    return this.http.post(`${this.apiurl}/register`,userData);
  }


  login(credentials:any):Observable<any>{
    return this.http.post(`${this.apiurl}/login`,credentials);
  }


  
  saveToken(token:string):void{
    localStorage.setItem('token',token);
  }
  
  getToken():string|null{
    return localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }
  logout():void{
    // localStorage.removeItem('authToken');
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
