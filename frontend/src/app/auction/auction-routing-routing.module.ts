import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuctionComponent } from './list-auction/list-auction.component';
import { DetailsAuctionComponent } from './list-auction/details-auction/details-auction.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { BidUpdateComponent } from './list-auction/bid-update/bid-update.component';
import { BidFormComponent } from './list-auction/bid-form/bid-form.component';



const routes: Routes = [
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path:'list',component:ListAuctionComponent },
  {path:'create',component:CreateAuctionComponent},
  {path:'details',component:DetailsAuctionComponent},
  { path: 'BidUpdate', component: BidUpdateComponent },
  { path: 'bid/:auctionId', component: BidFormComponent }, // ✅ Bid form with auctionId
  { path: 'live-bids', component: BidUpdateComponent }, // ✅ Real-time bid updates
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingRoutingModule { }
