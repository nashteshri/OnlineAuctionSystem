import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private apiUrl = 'http://localhost:3000/api/auction'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Create a new auction
  createAuction(auctionData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, auctionData);
  }

  // Get all auctions
  
  getAllAuctions(): Observable<any> {
    let token=localStorage.getItem("token");
    let headers=new HttpHeaders({
      "Authorization":token!,
      "Content-Type":"application/json"          //getting stored token from local stroage 

    })
    return this.http.get(`${this.apiUrl}`,{headers});
  }

  // Get auction by ID
  getAuctionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // // Search auctions by keyword
  // searchAuctions(keyword: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/search?query=${keyword}`);
  // }

  // // Delete auction by ID
  // deleteAuction(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
