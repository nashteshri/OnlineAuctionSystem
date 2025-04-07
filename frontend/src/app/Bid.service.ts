import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  private apiUrl = 'http://localhost:5000/api/bid';

  constructor(private http: HttpClient) {}

  // Sending bid data to backend
  submitBidService(bidData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, bidData);
  }

  //Geting user bids from backend
  getUserBids(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }
}
