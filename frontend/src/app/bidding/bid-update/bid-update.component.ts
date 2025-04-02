import { Component, NgZone, OnInit } from '@angular/core';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-bid-update',
  standalone: false,
  templateUrl: './bid-update.component.html',
  styleUrl: './bid-update.component.css'
})
export class BidUpdateComponent implements OnInit {
  latestBid:any;
  auctionResult:any;

  constructor(private webSocketService: WebsocketService){}

  ngOnInit(): void {
      //listen for real time bid updates
      this.webSocketService.listen("newBid").subscribe((bid)=>{
        console.log("New bid received:",bid);
        this.latestBid=bid;
      });

      //listen for real time winner 
      this.webSocketService.listen("auctionEnded").subscribe((result)=>{
        console.log("winner is:",result);
        this.auctionResult=result;
      });
  }
}
