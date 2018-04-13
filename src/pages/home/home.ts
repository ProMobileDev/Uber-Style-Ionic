
import {Component, ViewChild, ElementRef } from '@angular/core';
import {NavController, Platform, AlertController} from 'ionic-angular';
import {PlacesPage} from '../places/places';
import {PaymentMethodPage} from '../payment-method/payment-method';
import {FindingPage} from "../finding/finding";
import { Geolocation } from '@ionic-native/geolocation';
import { ProfilePage } from '../profile/profile';
declare var google: any;

/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  
  public placesService:any;
  public placedetails: any;
  // map id
  public mapId = Math.random() + 'map';

  // map height
  public mapHeight: number = 480;

  // show - hide booking form
  public showForm: boolean = false;

  // show - hide modal bg
  public showModalBg: boolean = false;

  // list vehicles
  public vehicles: any = [
    {
      name: 'Taxi',
      icon: 'icon-taxi',
      active: true
    },
    {
      name: 'SUV',
      icon: 'icon-car',
      active: false
    },
    {
      name: 'Car',
      icon: 'icon-sedan',
      active: false
    }
  ]

  // Note to driver
  public note: any;

  // Promo code
  public promo: any;

  // Map
  public map: any;
  constructor(public nav: NavController, public platform: Platform, public alertCtrl: AlertController, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
    this.initPlacedetails();
  }

  // toggle form
  toggleForm() {
    this.showForm = !this.showForm;
    this.showModalBg = (this.showForm == true);
  }

  // toggle active vehicle
  toggleVehicle(index) {
    for (var i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].active = (i == index);
    }
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(21.0318202, 105.8495298);

    let mapOptions = {
      center:   latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      // mapTypeControl: false,
      // zoomControl: false,
      // draggable: true,
      // streetViewControl: false
    }

    // this.map = new google.maps.Map(document.getElementById(this.mapId), mapOptions);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // // get ion-view height
    // var viewHeight = window.screen.height - 44; // minus nav bar
    // // get info block height
    // var infoHeight = document.getElementsByClassName('booking-info')[0].scrollHeight;
    // // get booking form height
    // var bookingHeight = document.getElementsByClassName('booking-form')[0].scrollHeight;

    // // set map height = view height - info block height + booking form height
    // this.mapHeight = viewHeight - infoHeight + bookingHeight;

    let options = {timeout: 12000, enableHighAccuracy: false};

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 100);
    
     
    // var image = {
    //   url: 'assets/img/mapmarker.png',
    //   size: new google.maps.Size(71, 71),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(17, 34),
    //   scaledSize: new google.maps.Size(35, 35)
    // };
    // new google.maps.Marker({
    //   map: this.map,
    //   animation: google.maps.Animation.DROP,
    //   position: this.map.getCenter(),
    //   icon:image
    // });
   
    // use GPS to get center position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(newLatLng);
      },
      (error) => {
        console.log(error);
      },
      options
    );
    
     
  }

  // Show note popup when click to 'Notes to driver'
  showNotePopup() {
    let prompt = this.alertCtrl.create({
      title: 'Notes to driver',
      message: "",
      inputs: [
        {
          name: 'note',
          placeholder: 'Note'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    prompt.present();
  };

  // Show promote code popup when click to 'Promote Code'
  showPromoPopup() {
    let prompt = this.alertCtrl.create({
      title: 'Promo code',
      message: "",
      inputs: [
        {
          name: 'note',
          placeholder: 'Promo code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    prompt.present();
  };

  // go to next view when the 'Book' button is clicked
  book() {
    // hide booking form
    this.toggleForm();

    // go to finding page
    this.nav.push(FindingPage);
  }

  // choose pickup place
  choosePlace() {
    // go to places page
    this.nav.push(PlacesPage);
  }

  // choose payment method
  choosePaymentMethod() {
    // go to payment method page
    this.nav.push(PaymentMethodPage);
  }
  next(){
    
    // var image = {
    //   url: 'assets/img/mapmarker.png',
    //   size: new google.maps.Size(71, 71),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(17, 34),
    //   scaledSize: new google.maps.Size(35, 35)
    // };
    // var marker = new google.maps.Marker({
    //   map: this.map,
    //   animation: google.maps.Animation.DROP,
    //   position: this.map.getCenter(),
    //   // icon:image
    // });
    // var lat = marker.getPosition().lat();
    // var lng = marker.getPosition().lng();
    var lat = this.map.getCenter().lat();
    var lng = this.map.getCenter().lng();
    console.log('marker positiong', lat, lng);

    var geocoder = new google.maps.Geocoder;
    var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
     
    var self = this;
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        for(let i = 0; i < results.length; i++){
          self.getInformation(results[i].place_id);
        }
        // if (results[1]) {
        //   console.log("result===", results[1].place_id);
        //   self.getInformation(results[1].place_id);
        // } else {
        //   console.log('No results found');
        // }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
    
  }
  getInformation(placeId: any){
    var self = this;
    var request = {
      placeId: placeId
    };
    this.placesService = new google.maps.places.PlacesService(this.map);
    this.placesService.getDetails(request, callback);
    function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log('page > getPlaceDetail > place > ', place);
            // set full address
            self.placedetails.name = place.name;
            self.placedetails.address = place.formatted_address;
            self.placedetails.phoneNumber = place.formatted_phone_number;
            self.placedetails.lat = place.geometry.location.lat();
            self.placedetails.lng = place.geometry.location.lng();
            // reviews add
            self.placedetails.reviews = place.reviews;
            
            
            for (var i = 0; i < place.address_components.length; i++) {
                let addressType = place.address_components[i].types[0];
                if(self.placedetails.components[addressType]) {
                    self.placedetails.components[addressType].set = true;
                    self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                    self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                }                                     
            }                  
                console.log('page > getPlaceDetail > details > ', self.placedetails);
                self.nav.push(ProfilePage , {info: self.placedetails});
        }else{
          console.log('page > getPlaceDetail > status > ', status);
        }
    }
    
  }
  initPlacedetails() {
    this.placedetails = {
        name: '', 
        address: '',
        phoneNumber:'',
        lat: '',
        lng: '',
        reviews:[],
        components: {
            route: { set: false, short:'', long:'' },                           // calle 
            street_number: { set: false, short:'', long:'' },                   // numero
            sublocality_level_1: { set: false, short:'', long:'' },             // barrio
            locality: { set: false, short:'', long:'' },                        // localidad, ciudad
            administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido 
            administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia 
            country: { set: false, short:'', long:'' },                         // pais
            postal_code: { set: false, short:'', long:'' },                     // codigo postal
            postal_code_suffix: { set: false, short:'', long:'' },              // codigo postal - sufijo
        }    
    };        
  }
}
