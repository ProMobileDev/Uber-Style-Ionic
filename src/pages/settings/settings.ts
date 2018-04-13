import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DriverService } from '../../services/driver-service';
import { TrackingPage } from '../tracking/tracking';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public driver:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public driverService:DriverService) {
    // get driver info
    this.driver = driverService.getItem(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  track() {
    this.navCtrl.setRoot(TrackingPage);
  }

}
