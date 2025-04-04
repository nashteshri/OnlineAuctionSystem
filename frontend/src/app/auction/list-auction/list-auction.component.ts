import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { PaginatorState } from 'primeng/paginator';
import { AuthService } from '../../user/auth.service';
import { response } from 'express';
import { DialogModule } from 'primeng/dialog';


interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-list-auction',
  standalone: false,
  templateUrl: './list-auction.component.html',
  styleUrl: './list-auction.component.css'
})

export class ListAuctionComponent {


  showDialog() {
    this.visible = true;
}

  visible: boolean = false;
  pagedAuctions!: any[];
  selectedAuctionId!: number |null;
  selectedAuctionDetails!:number | null;
  deleteAuctionId!:number;
  role!:string;


  //dialoge for bid button 
  visibleBid: boolean = false;

    showDialogBid() {
        this.visible = true;
    }
  

  
  constructor(private auctionservice: AuctionService ,private authService: AuthService) { 
    this.role = this.authService.getUserRole() as  any;
  }


  auctions!: any[];
  cols!: Column[];

  ngOnInit() {
    this.auctionservice.getAllAuctions().subscribe((data) => {
      this.auctions = data;
      this.updatePagedAuctions();
    });

    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'description', header: 'Description' },
      { field: 'startPrice', header: 'Start Price' },
      { field: 'startTime', header: 'Start Time' }
    ];
  }

  first: number = 0;
  rows: number = 10;

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.updatePagedAuctions();
  }

  private updatePagedAuctions(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.pagedAuctions = this.auctions.slice(start, end);
  }

  toggleBidForm(auctionId: number) {
      this.selectedAuctionId = this.selectedAuctionId === auctionId ? null : auctionId;
  }
  toggleDetails(auctionId:number){
    this.selectedAuctionDetails = this.selectedAuctionDetails === auctionId ? null : auctionId;
    this.visible = true;
  }

  onDeleteAuction(auctionId:number){
    this.auctionservice.deleteAuction(auctionId).subscribe({
      next:(response)=>{
        console.log("auction deleted Succesfully",response);
        window.location.reload();
      },
      error :(err) => {
        console.error('Error while deleting auction:', err);
      }
      

    })
  }
}
