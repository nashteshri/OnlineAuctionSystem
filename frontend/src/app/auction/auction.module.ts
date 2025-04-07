import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './list-auction/search/search.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListAuctionComponent } from './list-auction/list-auction.component';
import { DetailsAuctionComponent } from './list-auction/details-auction/details-auction.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { AuctionRoutingRoutingModule } from './auction-routing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { BidFormComponent } from './list-auction/bid-form/bid-form.component';
import { DialogModule } from 'primeng/dialog';
import { BidUpdateComponent } from './list-auction/bid-update/bid-update.component';


@NgModule({
  declarations: [
  //   SearchComponent
  ListAuctionComponent,
  DetailsAuctionComponent,
  CreateAuctionComponent,
  BidFormComponent,
  BidUpdateComponent,
  SearchComponent
  
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuctionRoutingRoutingModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    DialogModule
    
  ],
  exports:[
    //SearchComponent
  ]
})
export class AuctionModule { }
