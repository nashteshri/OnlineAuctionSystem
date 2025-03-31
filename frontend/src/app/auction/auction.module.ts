import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListAuctionComponent } from './list-auction/list-auction.component';
import { DetailsAuctionComponent } from './list-auction/details-auction/details-auction.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { AuctionRoutingRoutingModule } from './auction-routing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

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
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
    ButtonModule
    
  ],
  exports:[
    //SearchComponent
  ]
})
export class AuctionModule { }
