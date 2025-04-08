import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuctionComponent } from './list-auction/list-auction.component';
import { DetailsAuctionComponent } from './list-auction/details-auction/details-auction.component';
import { BidUpdateComponent } from './list-auction/bid-update/bid-update.component';
import { BidFormComponent } from './list-auction/bid-form/bid-form.component';
import { AuctionGuard } from './auction.guard';
import { AuthGuard } from '../user/auth.guard';



const routes: Routes = [
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path:'list',component:ListAuctionComponent,canActivate: [AuthGuard] },
  {path:'details',component:DetailsAuctionComponent},
  { path: 'BidUpdate', component: BidUpdateComponent },
  { path: 'bid/:auctionId', component: BidFormComponent },
  { path: 'live-bids', component: BidUpdateComponent ,canActivate:[AuctionGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingRoutingModule { }
export const AuctionRoutes: Routes = routes;
