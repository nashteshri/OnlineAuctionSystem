import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { log } from 'console';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup; // Define form variable
  loginError :string='';
  showPassword = false;

  
  constructor(private fb: FormBuilder,private authService:AuthService) { } // Inject FormBuilder

  ngOnInit() {
    this.loginForm = this.fb.group({//use this as we dont need to wrie formcontrol
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password validation
      rememberMe: [true], // Checkbox
      
    });
    
  }
  isloading=false;
  onSubmit(){
    if(this.loginForm.valid){
      this.isloading=true;
      this.authService.login(this.loginForm.value).subscribe({
        next:(response)=>{
          this.isloading=false;
          localStorage.setItem('token',response.token);
          console.log(response.token)
          alert('Login Sucessfull!');
          //this.router.navigate(['/admin'])

        },
        error:(err)=>{
          this.isloading=false;
          this.loginError='Invalid email or password';
          alert('login failed');
        }
      });
    }else{
      this.isloading=false;
      this.loginError = 'invalid form submisson';
    }
  }
  logout(){
    this.authService.logout();
  }

  //alerts for social media
  loginWithGoogle() {
    alert("Google Login Clicked!");
    // Implement Google OAuth Here
  }
  
  loginWithFacebook() {
    alert("Facebook Login Clicked!");
    // Implement Facebook OAuth Here
  }
  
  loginWithApple() {
    alert("Apple Login Clicked!");
    // Implement Apple OAuth Here
  }
  
}

