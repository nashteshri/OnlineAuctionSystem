import { Component, Input } from '@angular/core';
import { BidService } from '../../../Bid.service';
import { AuthService } from '../../../user/auth.service';
import { WebsocketService } from '../../WebsocketService';
import { log } from 'console';

@Component({
  selector: 'app-bid-form',
  standalone: false,
  templateUrl: './bid-form.component.html',
  styleUrl: './bid-form.component.css'
})
export class BidFormComponent {
  @Input() auctionId!: number;  // Auction ID passed from ListAuctionComponent
  userId!: number; // Loggedin user ID
  bidAmount!: number;
  role!:string;
  

  constructor(private bidService: BidService, private authService: AuthService,private webSocketService:WebsocketService) {
    this.userId = this.authService.getUserId() as number; 
    this.role = this.authService.getUserRole() as  any;
    console.log(this.role);
  }


  submitBid(): void {
    if (!this.bidAmount || this.bidAmount <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    const bidData = {
      userId: this.userId,
      auctionId: this.auctionId,
      amount: this.bidAmount
    };
    //console.log("Submitting bid:", bidData);
    //sending bid to backend via HTTP API so that we can store it in database
    this.bidService.submitBidService(bidData).subscribe({
      next: (response) => {
        console.log("Bid submitted successfully:", response);
        alert("Bid placed successfully!");
        this.webSocketService.send("newBid", bidData);
      },
      error: (error) => {
        console.error("Error submitting bid:", error);
        alert("Failed to place bid. Please try again.");
      }
    });

    
  }

}
