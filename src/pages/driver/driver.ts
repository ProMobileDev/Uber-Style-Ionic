import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriverService } from '../../services/driver-service';
import { TrackingPage } from '../tracking/tracking';

/*
  Generated class for the DriverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html'
})
export class DriverPage {
  public driver:any;

  constructor(public nav: NavController, public driverService:DriverService) {
    // get driver info
    this.driver = driverService.getItem(1);
  }

  track() {
    this.nav.setRoot(TrackingPage);
  }
}
