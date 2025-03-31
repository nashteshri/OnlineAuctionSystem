import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuctionComponent } from './list-auction/list-auction.component';
import { DetailsAuctionComponent } from './list-auction/details-auction/details-auction.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';


const routes: Routes = [
  {path:'list',component:ListAuctionComponent },
  {path:'create',component:CreateAuctionComponent},
  {path:'details',component:DetailsAuctionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingRoutingModule { }
