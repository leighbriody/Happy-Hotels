import { ISearchLocationResults ,  IBody, IResult, ISearchResults } from './../../searchResults';
import { HotelService } from './../../services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchLocation } from 'src/app/searchLocation';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute , private hotelService: HotelService) { }

  searchResult: Array<IResult>;
  totalResults:number;
  searchTerm:string;
  

  //I want to return an array of results


  result: Observable<any>;

 
  ngOnInit() {

    //get the destination id that was passed trough the router link
    let destId = this.activatedRouter.snapshot.paramMap.get("destId");
    console.log("dest id " , destId);

   

    //we then pass the dest id to our hotel service 
    this.hotelService.locationList(destId).subscribe((data: ISearchLocationResults) =>
    {this.searchResult = data.data.body.searchResults.results;
      this.totalResults = data.data.body.searchResults.totalCount; console.log("result : " , this.result)})

  


  
  }

}
