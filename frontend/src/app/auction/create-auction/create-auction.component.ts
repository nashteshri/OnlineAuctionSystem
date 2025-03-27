import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-create-auction',
  standalone: false,
  templateUrl: './create-auction.component.html',
  styleUrl: './create-auction.component.css'
})
export class CreateAuctionComponent implements OnInit {
  auctionForm!:FormGroup;
  constructor(private fb:FormBuilder ,private auctionservice:AuctionService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties
    this.auctionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      startPrice: ['', [Validators.required, Validators.min(100)]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      category: ['', Validators.required]
    });
  }
  isInvalid(controlName: string): boolean {
    const control = this.auctionForm.get(controlName);
    return control?.invalid && control?.touched ? true : false;
  }

  onSubmit() {
    if (this.auctionForm.valid) {
      this.auctionservice.createAuction(this.auctionForm.value).subscribe({
        next:(res)=>console.log('Auction Created:',res),
        error:(err)=> console.error('error:',err)

      })
      
    //   alert('Auction Created Successfully!');
    //   this.auctionForm.reset();
    // } else {
    //   alert('Please fill out the form correctly.');
     }
  }

}
