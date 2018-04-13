import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { DriverService } from '../../services/driver-service';
import { HomePage } from "../home/home";
declare var google: any;

/*
  Generated class for the TrackingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html'
})
export class TrackingPage {
  // map height
  public mapHeight:number = 480;

  // driver info
  public driver:any;

  // map
  public map:any;

  constructor(public nav: NavController, public driverService:DriverService, public platform:Platform,
              public alertCtrl: AlertController) {
    // get driver info
    this.driver = driverService.getItem(1);

    // show rating popup
    setTimeout(() => {
      this.showRating();
    }, 3000);
  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(21.0318202, 105.8495298);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // get ion-view height
    var viewHeight = window.screen.height - 44; // minus nav bar
    // get info block height
    var infoHeight = document.getElementsByClassName('tracking-info')[0].scrollHeight;

    this.mapHeight = viewHeight - infoHeight;

    let options = {timeout: 120000, enableHighAccuracy: true};

    navigator.geolocation.getCurrentPosition(
      (position) => {
        let newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(newLatLng);
        new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
        });
      },

      (error) => {
        console.log(error);
      }, options
    );

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);
  }

  // show rating popup
  showRating() {
    let prompt = this.alertCtrl.create({
      title: 'Thank you',
      message: 'We hope you have enjoyed your ride, For comments, compliments or enquiries, please write to us below',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.nav.setRoot(HomePage);
          }
        },
        {
          text: 'Submit',
          handler: data => {
            console.log('Saved clicked');
            this.nav.setRoot(HomePage);
          }
        }
      ]
    })

    prompt.present();
  }
}
