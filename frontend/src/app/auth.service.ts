// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs/internal/Observable';
// import {jwtDecode} from 'jwt-decode';
// //observable here are used to Represents asynchronous API calls
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/api';

//   constructor(private http: HttpClient, private router: Router) { }

//   register(userData: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, userData);
//   }

//   login(credentials: any): Observable<any> {
    
//     return this.http.post(`${this.apiUrl}/login`, credentials);
//   }
//   //saving the token so that token are needed for accessing protected routes
//   loginIn(token: string): void {

//     localStorage.setItem('token', token);
//   }
//   logout(): void {
//     localStorage.removeItem('token');
//   }
//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }
// }
