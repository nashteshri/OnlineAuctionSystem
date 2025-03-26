import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  loginIn(token:string):void{
    localStorage.setItem('token',token);
  }

  // logout(): void {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }
  logout(): void {
    localStorage.removeItem('token');
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
