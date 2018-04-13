import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, Events, AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';
/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public loading:   Loading;
  isLoggedIn:boolean = false;
  users: any; 
  
  constructor(public navCtrl: NavController,
    public nativeStorage: NativeStorage,
    public alertCtrl: AlertController, 
    public fb: Facebook,
    public events: Events,
    public googlePlus: GooglePlus, 
    public loadingCtrl: LoadingController){
  }

  signup() {
    this.navCtrl.setRoot(HomePage);
  }

  login() {
    this.navCtrl.setRoot(LoginPage);
  }
  //---------Facebook Login and Logout------------------------------------  
  public fbLogin(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then(res => {
      if(res.status === "connected") {
        this.isLoggedIn = true;

        this.getUserDetail(res.authResponse.userID);
      } else {
        this.isLoggedIn = false;
      }
       
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }
  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        res.picture = "https://graph.facebook.com/" + res.userId + "/picture?type=large";
        this.users = res;
        this.events.publish('user:fbLogin', this.users);
        this.navCtrl.setRoot(HomePage);
      })
      .catch(e => {
        console.log(e);
      });
  }
  googleLogin(){
    let nav = this.navCtrl;
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '588636713262-n0csiu0r75365hv9774tqage3sg5g1s0.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    }).then((user) => {
      this.users =({
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
       });
       this.events.publish('user:googleLogin', this.users);
        nav.setRoot(HomePage);
    
    }, (error) => {
      console.log('google plus login error', error);
      // let alert = this.alertCtrl.create({
      //   message: 'Please Input Empty Value' + error,
      //     buttons: [
      //       {
      //         text: "Ok",
      //         role: 'cancel' 
      //       }
      //     ]
      //   });
      //   alert.present();
    });
  }
}
