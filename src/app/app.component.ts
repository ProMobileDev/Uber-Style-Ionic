import {Component} from '@angular/core';
import {Platform, Events} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import pages
import { LoginPage} from '../pages/login/login';
import { HomePage} from '../pages/home/home';
import { HistoryPage} from '../pages/history/history';
import { NotificationPage} from '../pages/notification/notification';
import { SupportPage} from '../pages/support/support';
import { DriverPage } from '../pages/driver/driver';
import { SettingsPage } from '../pages/settings/settings';
import { TransactionsPage } from '../pages/transactions/transactions';
@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;
  public user = {name:"Adam Lambert", email:"test@test.com", picture:"assets/img/thumb/adam.jpg"};
  public pages = [
    {
      title: 'Stores',
      icon: 'ios-pin-outline',
      count: 0,
      component: HomePage
    },
    {
      title: 'Gift',
      icon: 'ios-checkmark-circle-outline',
      count: 0,
      component: HistoryPage
    },{
      title: 'Profile',
      icon: 'ios-person-outline',
      count: 0,
      component: DriverPage
    },
    {
      title: 'Settings',
      icon: 'ios-options-outline',
      count: 0,
      component: SettingsPage
    },
    {
      title: 'Transactions',
      icon: 'ios-time-outline',
      count: 0,
      component: TransactionsPage
    },
    {
      title: 'Helpdeskn',
      icon: 'ios-chatboxes-outline',
      count: 2,
      component: SupportPage
    },
    {
      title: 'Terms of Service',
      icon: 'ios-document-outline',
      count: 0,
      component: NotificationPage
    },
    {
      title: 'Privacy Policy',
      icon: 'ios-lock-outline',
      count: 0,
      component: SupportPage
    },
    {
      title: 'Logout',
      icon: 'ios-log-out-outline',
      count: 0,
      component: LoginPage
    }
  ];
 
  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              public events: Events,
              private iab: InAppBrowser) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
    this.listenToLoginEvents();
  }
  listenToLoginEvents(){
    this.events.subscribe('user:fbLogin', (data: any) => {
      console.log('FBLogin');
      this.user.name = data.name;
      this.user.email= data.email;
      this.user.picture = data.picture;
  
    });
    this.events.subscribe('user:googleLogin', (data: any) => {
      console.log('GoogleLogin');
      this.user.name = data.name;
      this.user.email= data.email;
      this.user.picture = data.picture;
      
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title === 'Terms of Service'){
      const ToS = this.iab.create('https://nudigift.com/tos.html','_self',{location:'yes'});
      ToS.show();
    }else if(page.title === 'Privacy Policy'){
      const PP = this.iab.create('https://nudigift.com/privacy.html','_self',{location:'yes'});
      PP.show();
    }else{
      this.nav.setRoot(page.component);
    }
    
  }
}


