import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './user/admin/admin.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './user/auth.guard';
import { CreateAuctionComponent } from './auction/create-auction/create-auction.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { ContactComponent } from './user/contact/contact.component';
import { BidUpdateComponent } from './auction/list-auction/bid-update/bid-update.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent},
  // {path:"search",component:SearchComponent},
  {path:"dashboard",component:ProfileComponent,canActivate:[AuthGuard]},
  {path:"create",component:CreateAuctionComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutUsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'BidUpdate', component: BidUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
