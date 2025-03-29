import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
@Component({
  selector: 'app-list-auction',
  standalone: false,
  templateUrl: './list-auction.component.html',
  styleUrl: './list-auction.component.css'
})
export class ListAuctionComponent  {
  // constructor (private auctionservice:AuctionService) {}
  // ngOnInit():void{
  //   this.getdetails()

  // }
  // private getdetails(){
  //   this.auctionservice.getAllAuctions().subscribe((items)=>{
  //     this.auctionservice=items
  //   })
  // }

}
