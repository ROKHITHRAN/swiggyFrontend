import { Component } from '@angular/core';

@Component({
  selector: 'app-search-location',
  imports: [],
  templateUrl: './search-location.html',
  styleUrl: './search-location.css',
})
export class SearchLocation {
  getLocation(){
    console.log("Clicked");
  }
}
