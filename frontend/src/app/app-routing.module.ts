import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './user/admin/admin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './auction/search/search.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/search',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent},
  {path:"search",component:SearchComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
