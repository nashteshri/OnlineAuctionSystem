import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,GuardResult,MaybeAsync,Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../user/auth.service";

@Injectable({
  providedIn:'root'
})
export class AuctionGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(): boolean {
    const userRole = this.authService.getUserRole(); 

    if (userRole === 'admin') {
      return true; // Allow access
    } else {
      this.router.navigate(['/list']); 
      return false;
    }
  }
}
