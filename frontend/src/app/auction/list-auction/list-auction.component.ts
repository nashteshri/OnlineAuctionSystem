import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { PaginatorState } from 'primeng/paginator';

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
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  pagedAuctions!: any[];
  selectedAuctionId!: number | null;

  constructor(private auctionservice: AuctionService) { }

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

}
