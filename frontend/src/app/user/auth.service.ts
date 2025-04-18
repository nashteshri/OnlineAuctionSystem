import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
// import { Router } from 'express';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl ='http://localhost:3000/api';

  user = {
  
    role:'',
  

  }

  userSubject = new BehaviorSubject(this.user)
  userSubject$ = this.userSubject.asObservable()

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

  //Creating For Profile 
  private apiurl2 ='http://localhost:3000/api/profile';
  private apiurl3='http://localhost:3000/api/bid'
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiurl2}/`);
  }

  getAllProfile(): Observable<any> {
    return this.http.get(`${this.apiurl2}/All`);
  }

  getBiddingHistory(): Observable<any> {
    return this.http.get(`${this.apiurl3}/`);
  }
  

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return this.http.patch(`${this.apiurl2}/change`, { oldPassword, newPassword });
  }

  getlatestBid(auctionId:number): Observable<any>{
    return this.http.get(`${this.apiurl3}/latest/${auctionId}`)


  }

  getUserId(): number | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decodedToken: any = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);
      return decodedToken.id; // Ensure your JWT contains `userId`
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  getUserRole():string | null{
    const token = this.getToken();
    if (!token) return null;
    try{
      const decodedToken:any =jwtDecode(token);
      console.log("Decode Token",decodedToken);
      return decodedToken.role;
    }catch(error){
      console.error("Error decoding token",error);
      return null;
    }
  }

  sendData(data:any){
    this.userSubject.next(data)
  }

  
}

