import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../WebsocketService';

@Component({
  selector: 'app-bid-update',
  standalone: false,
  templateUrl: './bid-update.component.html',
  styleUrls: ['./bid-update.component.css']
})
export class BidUpdateComponent implements OnInit {
  latestBid: any[]=[];

  constructor(private webSocketService: WebsocketService) {}

  ngOnInit(): void {
    console.log("Listening for new bid updates...");
    
    this.webSocketService.listen("newBid").subscribe((bid) => {
      console.log("New bid received:", bid);
      this.latestBid = [bid];
    });
  }
}
