import { Component, Input } from '@angular/core';

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
}
