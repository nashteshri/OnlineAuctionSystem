import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private authService:AuthService){}
  logout(){
    this.authService.logout();
  }
  profile: any;
  biddingHistory: any[] = [];
  oldPassword: string = '';
  newPassword: string = '';

  ngOnInit(): void {
    this.loadProfile();
    // this.loadBiddingHistory();
  }

  loadProfile() {
    this.authService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }
  loadBiddingHistory() {
    this.authService.getBiddingHistory().subscribe((data) => {
      this.biddingHistory = data;
    });
  }
  changePassword() {
    if (!this.oldPassword || !this.newPassword) {
      alert("Please enter both old and new passwords.");
      return;
    }

    this.authService.changePassword(this.oldPassword, this.newPassword).subscribe({
      next: (res) => {
        alert('Password updated successfully!');
        this.oldPassword = '';
        this.newPassword = '';
      },
      error: (err) => {
        alert('Error updating password: ' + err.error.message);
      }
    }
      
    );
  }

}
