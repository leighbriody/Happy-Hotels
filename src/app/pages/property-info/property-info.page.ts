import { GuestReview, IReviews, Review } from './../../Reviews';
import { IPropertyBody, IData, Brands, HygieneAndCleanliness } from './../../PropertyDetails';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyDetails } from 'src/app/PropertyDetails';
import { HotelService } from 'src/app/services/hotel.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HotelImage, IHotelImages, RoomImage } from 'src/app/HotelImages';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.page.html',
  styleUrls: ['./property-info.page.scss'],
})
export class PropertyInfoPage implements OnInit {

  test:IPropertyDetails;

   propertyDetailsResult : IData;
  brandName: string;
  cityName:string;
  countryName:string;
  mapWidget:string;
  price:string;
  overview: string[];
  starRating: number;
  health:string;


  starRatingTitle: string;

  checkIn:string;
  checkOut:string;
  //Rooms
  roomTypes: string[];

  //tag line ex luxury bars with 2 bars / lounges near 5thh av
  stringtagline: string[];

  //freebies 'Free Wifi'
  freeWifi:string;
propertyName: string;

//guest reviews - brads
guestReviews : Brands;

//hotel imaghes
hotelImages: HotelImage[];
hotelImageBaseUrls: string[];
roomImages: RoomImage[];
size: 'z';
//room images

//Hotel reviews
reviews: IReviews;
allReviews: Review[];

reviews2 : GuestReview;
   testText : string="Hello How Are You ? ";

  constructor(private activateRoute:ActivatedRoute , private hotelService: HotelService) { }

 
  option = {

  }
  ngOnInit() {

   

    let id = this.activateRoute.snapshot.paramMap.get('propId');
    console.log("prop id " , id);

    this.hotelService.getPropertyDetails(id).subscribe((data: IPropertyDetails) =>
    {this.brandName = data.data.common.pointOfSale.brandName;
      this.countryName = data.data.body.propertyDescription.address.fullAddress;
      this.mapWidget = data.data.body.propertyDescription.mapWidget.staticMapUrl;
      this.price = data.data.body.propertyDescription.featuredPrice.currentPrice.formatted;
      this.overview = data.data.body.overview.overviewSections[0].content;
     this.cityName = data.data.body.propertyDescription.address.cityName;
     this.propertyName = data.data.body.propertyDescription.name;
     this.starRating = data.data.body.propertyDescription.starRating;
     this.starRatingTitle = data.data.body.propertyDescription.starRatingTitle;
    this.roomTypes = data.data.body.propertyDescription.roomTypeNames;
      this.stringtagline = data.data.body.propertyDescription.tagline;
      this.freeWifi = data.data.body.propertyDescription.freebies[0];
      this.guestReviews = data.data.body.guestReviews.brands;
      this.checkIn = data.data.body.atAGlance.keyFacts.arrivingLeaving[0];
      this.checkOut = data.data.body.atAGlance.keyFacts.arrivingLeaving[1];
      this.health = data.data.body.hygieneAndCleanliness.title;

      
      console.log(this.propertyDetailsResult)})


      //We also want to get the property images
      this.hotelService.getHotelPhotos(id).subscribe((data: IHotelImages)=>
      {this.roomImages = data.roomImages;
      this.hotelImages = data.hotelImages;})
      
      this.option = {
        slidesPerView:1.5,
        canteredSlides: true,
        loop:true,
        spaceBetween:10,
        autoplay:true
      }


      //We also want to get the reviews for this property so we will call the get reviews method on the hotel service
      this.hotelService.getHotelReviews(id).subscribe((data: IReviews) => 
      {this.allReviews = data.reviewData.guestReviewGroups.guestReviews[0].reviews; console.log("review data " , data)})
 
        


  }

}
