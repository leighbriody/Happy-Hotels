import { HotelService } from './../../services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.page.html',
  styleUrls: ['./property-list.page.scss'],
})
export class PropertyListPage implements OnInit {

  constructor(private activateRoute:ActivatedRoute , private hotelService: HotelService) { }


  private listedProperites: any [];
 

  ngOnInit() {

    //we get the destid , check in , check out , num people
    let destId = this.activateRoute.snapshot.paramMap.get('destId');
    

    //we pass it to the hotelService get list result method 

    //store result in varibale which the view iterates trough


  }

}
