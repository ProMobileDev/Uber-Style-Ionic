import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TripService } from '../../services/trip-service';
/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // history records
  public records:any;
  public info:  any;
  constructor(public nav: NavController, public tripService: TripService, public navParam:NavParams) {
    this.records = tripService.getAll();
    this.info = this.navParam.get('info');
    console.log('Location Information==', this.info);
  }
  buy(){

  }
}
