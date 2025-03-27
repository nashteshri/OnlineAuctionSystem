import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

import { ListAuctionComponent } from './list-auction/list-auction.component';
import { DetailsAuctionComponent } from './details-auction/details-auction.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { AuctionRoutingRoutingModule } from './auction-routing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  //   SearchComponent
  ListAuctionComponent,
  DetailsAuctionComponent,
  CreateAuctionComponent,
  
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuctionRoutingRoutingModule,
    ReactiveFormsModule
    
  ],
  exports:[
    //SearchComponent
  ]
})
export class AuctionModule { }
