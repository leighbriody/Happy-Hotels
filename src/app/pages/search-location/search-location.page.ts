import { IEntity, ISuggestions, ISearchLocation } from './../../searchLocation';
import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {

  //Here we have the search term which is a ngModel of our search box,
  searchTerm: string = '';



  private myResultDetails : Array<IEntity>;



  //now we need to inject our hotel service to the constructor
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
  }

  //now we add a search changed function
  //this will get triggered when an input field is changed 
  //it will then call our service method to get all locations

  searchChanged(){
   
    //this returns an array of entites 
    //suggestions[0].entities is an array of entites
    this.hotelService.searchLocation(this.searchTerm).subscribe((data: ISearchLocation) =>
    {this.myResultDetails = data.suggestions[0].entities; console.log(this.myResultDetails)})

  
  }

}
