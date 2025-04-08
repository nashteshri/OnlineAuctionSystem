import { Component, Input } from '@angular/core';
import { BidService } from '../../../Bid.service';
import { AuthService } from '../../../user/auth.service';

@Component({
  selector: 'app-details-auction',
  standalone: false,
  templateUrl: './details-auction.component.html',
  styleUrl: './details-auction.component.css'
})
export class DetailsAuctionComponent {
  @Input() auctionId!: number;
  @Input() description!:string;
  @Input() category!:string;
  latestBid: any= null;
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.fetchLatestBid();
  }

  fetchLatestBid():void{
    this.authService.getlatestBid(this.auctionId).subscribe({
      next:(data)=>{
        if(data){
          this.latestBid = data;
          console.log(this.latestBid);
        }else{
          this.latestBid = null;
        }
        
        
      },
      error:(err)=>{
        console.error('Failed to fetch latest bid:');

      }
    })
  }
}
