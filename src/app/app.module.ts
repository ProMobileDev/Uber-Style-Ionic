import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import facebook and google
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
// import services
import {DriverService} from '../services/driver-service';
import {NotificationService} from '../services/notification-service';
import {PlaceService} from '../services/place-service';
import {TripService} from '../services/trip-service';
// end import services

// import pages
import {DriverPage} from '../pages/driver/driver';
import {FindingPage} from '../pages/finding/finding';
import {HistoryPage} from '../pages/history/history';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {ModalRatingPage} from '../pages/modal-rating/modal-rating';
import {NotificationPage} from '../pages/notification/notification';
import {PaymentMethodPage} from '../pages/payment-method/payment-method';
import {PlacesPage} from '../pages/places/places';
import {ProfilePage} from '../pages/profile/profile';
import {RegisterPage} from '../pages/register/register';
import {SupportPage} from '../pages/support/support';
import {TrackingPage} from '../pages/tracking/tracking';
import { SettingsPage } from '../pages/settings/settings';
import { TransactionsPage } from '../pages/transactions/transactions';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    DriverPage,
    FindingPage,
    HistoryPage,
    HomePage,
    LoginPage,
    ModalRatingPage,
    NotificationPage,
    PaymentMethodPage,
    PlacesPage,
    ProfilePage,
    RegisterPage,
    SupportPage,
    TrackingPage,
    SettingsPage,
    TransactionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DriverPage,
    FindingPage,
    HistoryPage,
    HomePage,
    LoginPage,
    ModalRatingPage,
    NotificationPage,
    PaymentMethodPage,
    PlacesPage,
    ProfilePage,
    RegisterPage,
    SupportPage,
    TrackingPage,
    SettingsPage,
    TransactionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DriverService,
    NotificationService,
    PlaceService,
    NativeStorage,
    GooglePlus,
    Facebook,
    InAppBrowser,
    Geolocation,
    TripService
    /* import services */
  ]
})
export class AppModule {
}
