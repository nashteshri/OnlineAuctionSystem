import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia']; // Country options

  constructor(private fb: FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobilenumber: ['', [Validators.required, Validators.pattern(/^\+91\d{10}$/)]], // Indian format example
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     console.log('Form Submitted', this.registerForm.value);
  //   } else {
  //     console.log('Form is Invalid');
  //   }
  // }
  onSubmit(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe({
        next:(response)=>{
          alert('Login Sucessfully');
        },
        error:(err)=>{

          alert('Invalid form details')
        }
      })
    }
  }

}
