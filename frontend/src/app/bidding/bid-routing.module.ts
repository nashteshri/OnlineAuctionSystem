import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidUpdateComponent } from './bid-update/bid-update.component';


const routes: Routes = [
  { path: 'BidUpdate', component: BidUpdateComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class BidRoutingModule { }
