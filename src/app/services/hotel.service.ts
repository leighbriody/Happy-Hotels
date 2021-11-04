
import { IPropertyDetails } from './../PropertyDetails';

import { IEntity, ISearchLocation } from './../searchLocation';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ISearchLocationResults } from '../searchResults';
import { IPropertyBody } from '../PropertyDetails';
import { IHotelImages } from '../HotelImages';
import { IReviews } from '../Reviews';



@Injectable({
  providedIn: 'root'
})
export class HotelService {

  

  //this is the base url for the search 
  url = "https://hotels4.p.rapidapi.com/locations/search";
  apiKey = "****";
  
 //define our headers 
 public headerDict2 = {
  'x-rapidapi-key': this.apiKey

}

public requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(this.headerDict2),  
};

  //we inject the htttp client into the construct or
  constructor(private http: HttpClient) { }

  

locationList(destId:string): Observable<ISearchLocationResults>{

   

    //define our endpoint
   var endpoint = "https://hotels4.p.rapidapi.com/properties/list";

    //return our request with paramaters


    return  this.http.get<ISearchLocationResults>(`${endpoint}?destinationId=${encodeURI(destId)}` ,this.requestOptions ).pipe(tap(Source => console.log('fetched sources'),catchError(this.handleError('getSources', []))));
    
}


 searchLocation(locationName : string) :Observable<ISearchLocation>{

 
 

  return  this.http.get<ISearchLocation>(`${this.url}?query=${encodeURI(locationName)}` ,this.requestOptions ).pipe(tap(Source => console.log('fetched sources'),catchError(this.handleError('getSources', []))));

}

getPropertyDetails(id:string) : Observable<IPropertyDetails>{


  //define our endpoint
  var endpoint2 = "https://hotels4.p.rapidapi.com/properties/get-details";

  return  this.http.get<IPropertyDetails>(`${endpoint2}?id=${encodeURI(id)}` ,this.requestOptions ).pipe(tap(Source => console.log('fetched sources'),catchError(this.handleError('getSources', []))));
}

//property get hotel photos
getHotelPhotos(id:string): Observable<IHotelImages>{
 

  var endpoint3 = "https://hotels4.p.rapidapi.com/properties/get-hotel-photos";

  return  this.http.get<IHotelImages>(`${endpoint3}?id=${encodeURI(id)}` ,this.requestOptions ).pipe(tap(Source => console.log('fetched sources'),catchError(this.handleError('getSources', []))));
  
}

getHotelReviews(id:string) :  Observable<IReviews>{


var endpoint4 = "https://hotels4.p.rapidapi.com/reviews/list";

return  this.http.get<IReviews>(`${endpoint4}?id=${encodeURI(id)}` ,this.requestOptions ).pipe(tap(Source => console.log('fetched sources'),catchError(this.handleError('getSources', []))));

}


  //here we have the get

  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
}


