import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup; //form group:Represents the entire form
  countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia']; // Country options

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) { }
  //form validation
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), this.noMultipleSpaces]],
      email: ['', [Validators.required, Validators.email, this.noMultipleSpaces]],
      password: ['', [Validators.required, Validators.minLength(6), this.noMultipleSpaces]],
      mobilenumber: ['', [Validators.required, Validators.pattern(/^\+91\d{10}$/), this.noMultipleSpaces]],
      gender: ['', Validators.required],
      address: ['', [Validators.required, this.noMultipleSpaces]],
      city: ['', [Validators.required, this.noMultipleSpaces]],
      country: ['', Validators.required]
    });
  }
  //Api calling

  isloading=false;
  onSubmit(){
    if(this.registerForm.valid){
      this.isloading=true;
      this.authService.register(this.registerForm.value).subscribe({
        next:(response)=>{
          this.isloading=false;
          alert('Login Sucessfully');

          this.router.navigate(['/dashboard']);
        },
        error:(err)=>{
          this.isloading=false;
          alert('Invalid form details')
        }
      })
    }
  }
  //handling multiple spaces
  noMultipleSpaces(control: any) {
    if (control.value && /\s{2,}/.test(control.value)) {
      return { multipleSpaces: true }; // Error Object
    }
    return null; // No error
  }

}
