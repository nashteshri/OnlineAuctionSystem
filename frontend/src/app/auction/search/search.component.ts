import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  searchText: string='shree';
  // updateSearchText(event:any){
  //   this.searchText=event.target.value;
  // }
}
