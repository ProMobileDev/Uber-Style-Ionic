webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, nativeStorage, fb, events, googlePlus, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.fb = fb;
        this.events = events;
        this.googlePlus = googlePlus;
        this.loadingCtrl = loadingCtrl;
        this.isLoggedIn = false;
        fb.getLoginStatus().then(function (res) {
            console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        }).catch(function (e) { return console.log(e); });
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    //---------Facebook Login and Logout------------------------------------  
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            res.picture = "https://graph.facebook.com/" + res.userId + "/picture?type=large";
            _this.users = res;
            _this.events.publish('user:fbLogin', _this.users);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage.prototype.facebookLogout = function () {
        this.fb.logout().then(function (response) {
            this.navCtrl.setRoot(LoginPage_1);
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        var nav = this.navCtrl;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': '588636713262-n0csiu0r75365hv9774tqage3sg5g1s0.apps.googleusercontent.com',
            'offline': true
        }).then(function (user) {
            _this.users = ({
                name: user.displayName,
                email: user.email,
                picture: user.imageUrl
            });
            _this.events.publish('user:googleLogin', _this.users);
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            var alert = _this.alertCtrl.create({
                message: 'Please Input Empty Value' + error,
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="auth-bg">\n  <!-- Login Form -->\n  <div class="login-cont">\n    <ion-item>\n      <ion-input type="text" placeholder="Email or username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n          \n    <button  class="login-btn" ion-button color="primary"  block (click)="login()">LOGIN</button>\n    <ion-row class="social-row">\n      <ion-col class="fb-col">\n        <button ion-button icon-left block (click)="fbLogin()"><ion-icon name="logo-facebook"></ion-icon>FACEBOOK</button>\n      </ion-col>\n      <ion-col class="google-col">\n        <button ion-button icon-left block (click)="googleLogin()"><ion-icon name="logo-google"></ion-icon>GOOGLE</button>\n      </ion-col>\n    </ion-row>\n    <!-- Other links -->\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <span ion-text color="white" >Forgot password?</span>\n          </ion-col>\n          <ion-col>\n            <span ion-text color="white" >\n              <span ion-text color="white" class="pull-left" (click)="signup()">Sign up</span>\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </div> \n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_tracking__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DriverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DriverPage = /** @class */ (function () {
    function DriverPage(nav, driverService) {
        this.nav = nav;
        this.driverService = driverService;
        // get driver info
        this.driver = driverService.getItem(1);
    }
    DriverPage.prototype.track = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tracking_tracking__["a" /* TrackingPage */]);
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/driver/driver.html"*/'<!--\n  Generated template for the DriverPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Driver found</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="driver-top dark-bg light" text-center>\n    <span>Success! We found you a driver</span>\n  </div>\n\n  <div class="driver-info rlt" text-center>\n\n    <div class="driver-picture" padding-bottom>\n\n      <img class="circle" src="assets/img/thumb/adam.jpg" alt=""/>\n    </div>\n\n    <div no-margin>Hi, my name is</div>\n    <h3 no-margin ion-text color="primary" >{{ driver.name }}</h3>\n    <div no-margin>and I am {{ driver.distance }}KM away</div>\n\n    <ion-grid class="driver-plate">\n      <ion-row>\n        <ion-col>\n          <div class="text-hint">Plate Number</div>\n          <strong margin-top>{{ driver.plate }}</strong>\n        </ion-col>\n        <ion-col>\n          <div class="text-hint">Please pay by</div>\n          <strong>Cash</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div ion-button block color="primary" (click)="track()">Next</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/driver/driver.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the TrackingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TrackingPage = /** @class */ (function () {
    function TrackingPage(nav, driverService, platform, alertCtrl) {
        var _this = this;
        this.nav = nav;
        this.driverService = driverService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // map height
        this.mapHeight = 480;
        // get driver info
        this.driver = driverService.getItem(1);
        // show rating popup
        setTimeout(function () {
            _this.showRating();
        }, 3000);
    }
    TrackingPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    TrackingPage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(21.0318202, 105.8495298);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // get ion-view height
        var viewHeight = window.screen.height - 44; // minus nav bar
        // get info block height
        var infoHeight = document.getElementsByClassName('tracking-info')[0].scrollHeight;
        this.mapHeight = viewHeight - infoHeight;
        var options = { timeout: 120000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.map.setCenter(newLatLng);
            new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
        }, function (error) {
            console.log(error);
        }, options);
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    // show rating popup
    TrackingPage.prototype.showRating = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Thank you',
            message: 'We hope you have enjoyed your ride, For comments, compliments or enquiries, please write to us below',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        prompt.present();
    };
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/tracking/tracking.html"*/'<!--\n  Generated template for the TrackingPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Driver on the way</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Show map here -->\n  <div id="map" [ngStyle]="{height: mapHeight + \'px\'}"></div>\n\n  <ion-list class="list-no-border">\n\n    <ion-item class="tracking-info no-border">\n      <img class="circle icon pull-left" src="assets/img/thumb/adam.jpg" item-left alt=""/>\n      <div class="item-content">\n        <div>\n          <strong>{{ driver.plate }}</strong>\n          <div>{{ driver.name }}</div>\n        </div>\n\n        <div class="action-icons">\n          <ion-icon name="call" color="secondary" ></ion-icon>\n          <ion-icon name="mail" color="secondary" ></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/tracking/tracking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, nativeStorage, alertCtrl, fb, events, googlePlus, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.events = events;
        this.googlePlus = googlePlus;
        this.loadingCtrl = loadingCtrl;
        this.isLoggedIn = false;
    }
    RegisterPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    //---------Facebook Login and Logout------------------------------------  
    RegisterPage.prototype.fbLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    RegisterPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            res.picture = "https://graph.facebook.com/" + res.userId + "/picture?type=large";
            _this.users = res;
            _this.events.publish('user:fbLogin', _this.users);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    RegisterPage.prototype.googleLogin = function () {
        var _this = this;
        var nav = this.navCtrl;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': '588636713262-n0csiu0r75365hv9774tqage3sg5g1s0.apps.googleusercontent.com',
            'offline': true
        }).then(function (user) {
            _this.users = ({
                name: user.displayName,
                email: user.email,
                picture: user.imageUrl
            });
            _this.events.publish('user:googleLogin', _this.users);
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
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
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class=" auth-bg">\n  <!-- Login Form -->\n  <div class="login-cont">\n      <ion-item>\n          <ion-input type="text" placeholder="Your name"></ion-input>\n        </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n            \n      <button  class="login-btn" ion-button color="primary"  block (click)="login()">CREATE ACCOUNT</button>\n      <ion-row class="social-row">\n        <ion-col class="fb-col">\n          <button ion-button icon-left block (click)="fbLogin()"><ion-icon name="logo-facebook"></ion-icon>FACEBOOK</button>\n        </ion-col>\n        <ion-col class="google-col">\n          <button ion-button icon-left block (click)="googleLogin()"><ion-icon name="logo-google"></ion-icon>GOOGLE</button>\n        </ion-col>\n      </ion-row>\n      <!-- Other links -->\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n              <span ion-text color="white" >Forgot password?</span>\n            </ion-col>\n            <ion-col>\n              <span ion-text color="white" >\n                <span ion-text color="white" class="pull-left" (click)="signup()">Login</span>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div> \n   \n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PlacesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PlacesPage = /** @class */ (function () {
    function PlacesPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        this.recentPlaces = this.placeService.getAll();
        this.places = this.placeService.getAll();
    }
    PlacesPage.prototype.choosePlace = function () {
        this.nav.pop();
    };
    PlacesPage.prototype.placeSearch = function (ev) {
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/places/places.html"*/'<!--\n  Generated template for the PlacesPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Places</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="serviceInput"  (ionInput)="placeSearch($event)" [showCancelButton] ="" placeholder="Search"></ion-searchbar>\n  <ion-item-group class="list-full-border">\n    <ion-item-divider class="div-lbl" color="gray">Recent</ion-item-divider>\n    <ion-item *ngFor="let place of places" (click)="choosePlace(place)">\n      <ion-icon name="ios-pin-outline" item-left>\n      </ion-icon>\n      <span class="item-icon-label">\n        {{ place.distance }} km\n      </span>\n      <div>\n        <div class="bold">{{ place.name }}</div>\n        <span>{{ place.address }}</span>\n      </div>\n    </ion-item>\n  </ion-item-group>\n  <ion-item-group class="list-full-border">\n      <ion-item-divider class="div-lbl" color="gray">Nearby</ion-item-divider>\n      <ion-item *ngFor="let place of places" (click)="choosePlace(place)">\n        <ion-icon name="ios-pin-outline" item-left>\n        </ion-icon>\n        <span class="item-icon-label">\n          {{ place.distance }} km\n        </span>\n        <div>\n          <div class="bold">{{ place.name }}</div>\n          <span>{{ place.address }}</span>\n        </div>\n      </ion-item>\n    </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/places/places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_places__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceService = /** @class */ (function () {
    function PlaceService() {
        this.places = __WEBPACK_IMPORTED_MODULE_1__mock_places__["a" /* PLACES */];
    }
    PlaceService.prototype.getAll = function () {
        return this.places;
    };
    PlaceService.prototype.getItem = function (id) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === parseInt(id)) {
                return this.places[i];
            }
        }
        return null;
    };
    PlaceService.prototype.remove = function (item) {
        this.places.splice(this.places.indexOf(item), 1);
    };
    PlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlaceService);
    return PlaceService;
}());

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the PaymentMethodPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var PaymentMethodPage = /** @class */ (function () {
    function PaymentMethodPage(nav) {
        this.nav = nav;
    }
    // apply change method
    PaymentMethodPage.prototype.changeMethod = function (method) {
        // go back
        this.nav.pop();
    };
    PaymentMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-method',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/payment-method/payment-method.html"*/'<!--\n  Generated template for the PaymentMethodPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar  color="primary" >\n    <ion-title>Payment Methods</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-full-border" radio-group>\n    <ion-item>\n      <ion-label>\n        Cash\n        <p class="text-hint">Cash</p>\n      </ion-label>\n      <ion-radio checked="true" value="A" (click)="changeMethod(\'cash\')"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Card\n        <p class="text-hint">Credit card XXX71</p>\n      </ion-label>\n      <ion-radio value="B" (click)="changeMethod(\'card\')"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Paypal\n        <p class="text-hint">mypaypal@noo.com</p>\n      </ion-label>\n      <ion-radio value="B" (click)="changeMethod(\'card\')"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/payment-method/payment-method.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PaymentMethodPage);
    return PaymentMethodPage;
}());

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_driver__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FindingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FindingPage = /** @class */ (function () {
    function FindingPage(nav, driverService) {
        var _this = this;
        this.nav = nav;
        this.driverService = driverService;
        // get list drivers
        this.drivers = driverService.getAll();
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__driver_driver__["a" /* DriverPage */]);
        }, 5000);
    }
    FindingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finding',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/finding/finding.html"*/'<!--\n  Generated template for the FindingPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Finding you a driver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" primary-bg">\n  <!-- Green circle with marker icon in the center -->\n  <div padding text-center="">\n    <div class="location-animation circle">\n      <ion-icon name="pin" color="light" ></ion-icon>\n    </div>\n  </div>\n\n  <ion-list class="list-no-border list-drivers" padding>\n    <ion-item *ngFor="let driver of drivers">\n      <span>{{ driver.name }}</span>\n      <span class="pull-right">{{ driver.status }}...</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/finding/finding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */]])
    ], FindingPage);
    return FindingPage;
}());

//# sourceMappingURL=finding.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProfilePage = /** @class */ (function () {
    function ProfilePage(nav, tripService, navParam) {
        this.nav = nav;
        this.tripService = tripService;
        this.navParam = navParam;
        this.records = tripService.getAll();
        this.info = this.navParam.get('info');
        console.log('Location Information==', this.info);
    }
    ProfilePage.prototype.buy = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="profile">\n  <ion-fab center bottom>\n        <button ion-fab color="vibrant" (click)="buy()" mini>BUY</button>\n  </ion-fab>\n  <div class="pic-cont">\n      <img class="profile-picture" src="assets/img/thumb/adam.jpg">\n      <!-- <p class="currency-lbl" ion-text color="dark" >AUD</p> -->\n      <p class="currency-lbl" ion-text color="dark" >{{info.components.country.short}}</p>\n      <!-- <h2 ion-text color="primary"> Alfresco Italian Restaurant</h2> -->\n      <h2 ion-text color="primary"> {{info.name}}</h2>\n      <!-- <p class="address-lbl" ion-text color="dark">137 Flockton St, Everton Park QLD 4053, Australia</p> -->\n      <p class="address-lbl" ion-text color="dark">{{info.address}}</p>\n      <!-- <p ion-text color="primary" >(07) 55389333</p> -->\n      <p ion-text color="primary" >{{info.phoneNumber}}</p>\n  </div>\n  <ion-list class="list-full-border">\n      <ion-item *ngFor="let record of records">\n        <div class="detail-cont" item-start >\n          <h5 class="bold">{{ record.time }} </h5>\n          <p class="top-lbl"> From: {{ record.from }}</p>\n          <p class="bottom-lbl">Current Balance: {{ record.to }}</p>\n        </div>\n        <ion-checkbox [(ngModel)]="status" item-right></ion-checkbox>\n      </ion-item>\n  </ion-list>  \n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HistoryPage = /** @class */ (function () {
    function HistoryPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.records = tripService.getAll();
    }
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let record of records">\n      <div>\n        <div class="bold">{{ record.time }}</div>\n        <div>From: {{ record.from }}</div>\n        <div>To: {{ record.to }}</div>\n      </div>\n      <ion-icon name="ios-star-outline" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/history/history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NotificationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var NotificationPage = /** @class */ (function () {
    function NotificationPage(nav, notificationService) {
        this.nav = nav;
        this.notificationService = notificationService;
        this.notifications = notificationService.getAll();
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let noti of notifications">\n      <ion-icon name="ios-mail-outline" color="primary"  item-left></ion-icon>\n      <div [ngClass]="{\'bold\': !noti.read}">{{ noti.title }}</div>\n      <span>{{ noti.createdAt }}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_notifications__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notifications = __WEBPACK_IMPORTED_MODULE_1__mock_notifications__["a" /* NOTIFICATIONS */];
    }
    NotificationService.prototype.getAll = function () {
        return this.notifications;
    };
    NotificationService.prototype.getItem = function (id) {
        for (var i = 0; i < this.notifications.length; i++) {
            if (this.notifications[i].id === parseInt(id)) {
                return this.notifications[i];
            }
        }
        return null;
    };
    NotificationService.prototype.remove = function (item) {
        this.notifications.splice(this.notifications.indexOf(item), 1);
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SupportPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SupportPage = /** @class */ (function () {
    function SupportPage(nav) {
        this.nav = nav;
    }
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/support/support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Support</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="support">\n  <div class="feedback-form padding">\n    <textarea name="feed_back" placeholder="Type your feedback here"></textarea>\n    <button  ion-button block color="primary" >SEND</button>\n    <div text-center>OR</div>\n    <button  ion-button button block color="dark" >CALL US</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_tracking__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, driverService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.driverService = driverService;
        // get driver info
        this.driver = driverService.getItem(1);
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.track = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tracking_tracking__["a" /* TrackingPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="driver-top dark-bg light" text-center>\n        <span>Success! We found you a driver</span>\n      </div>\n    \n      <div class="driver-info rlt" text-center>\n    \n        <div class="driver-picture" padding-bottom>\n    \n          <img class="circle" src="assets/img/thumb/adam.jpg" alt=""/>\n        </div>\n    \n        <div no-margin>Hi, my name is</div>\n        <h3 no-margin ion-text color="primary" >{{ driver.name }}</h3>\n        <div no-margin>and I am {{ driver.distance }}KM away</div>\n    \n        <ion-grid class="driver-plate">\n          <ion-row>\n            <ion-col>\n              <div class="text-hint">Plate Number</div>\n              <strong margin-top>{{ driver.plate }}</strong>\n            </ion-col>\n            <ion-col>\n              <div class="text-hint">Please pay by</div>\n              <strong>Cash</strong>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    \n        <div ion-button block color="primary" (click)="track()">Next</div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(navCtrl, navParams, tripService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tripService = tripService;
        this.records = tripService.getAll();
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionsPage');
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/transactions/transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button  ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>transactions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list class="list-full-border">\n        <ion-item *ngFor="let record of records">\n          <div>\n            <div class="bold">{{ record.time }}</div>\n            <div>From: {{ record.from }}</div>\n            <div>To: {{ record.to }}</div>\n          </div>\n          <ion-icon name="ios-star-outline" item-right></ion-icon>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_driver_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_notification_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_place_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_trip_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_driver_driver__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_finding_finding__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_history_history__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modal_rating_modal_rating__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notification_notification__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_payment_method_payment_method__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_places_places__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register_register__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_support_support__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tracking_tracking__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_settings_settings__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_transactions_transactions__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import facebook and google



// import services




// end import services
// import pages















// end import pages
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_finding_finding__["a" /* FindingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modal_rating_modal_rating__["a" /* ModalRatingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_payment_method_payment_method__["a" /* PaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_finding_finding__["a" /* FindingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modal_rating_modal_rating__["a" /* ModalRatingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_payment_method_payment_method__["a" /* PaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_driver_service__["a" /* DriverService */],
                __WEBPACK_IMPORTED_MODULE_12__services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_13__services_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__services_trip_service__["a" /* TripService */]
                /* import services */
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_history_history__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_support_support__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_driver_driver__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import pages








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, iab) {
        this.events = events;
        this.iab = iab;
        this.user = { name: "Adam Lambert", email: "test@test.com", picture: "assets/img/thumb/adam.jpg" };
        this.pages = [
            {
                title: 'Stores',
                icon: 'ios-pin-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            },
            {
                title: 'Gift',
                icon: 'ios-checkmark-circle-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_7__pages_history_history__["a" /* HistoryPage */]
            }, {
                title: 'Profile',
                icon: 'ios-person-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_10__pages_driver_driver__["a" /* DriverPage */]
            },
            {
                title: 'Settings',
                icon: 'ios-options-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */]
            },
            {
                title: 'Transactions',
                icon: 'ios-time-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__["a" /* TransactionsPage */]
            },
            {
                title: 'Helpdeskn',
                icon: 'ios-chatboxes-outline',
                count: 2,
                component: __WEBPACK_IMPORTED_MODULE_9__pages_support_support__["a" /* SupportPage */]
            },
            {
                title: 'Terms of Service',
                icon: 'ios-document-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */]
            },
            {
                title: 'Privacy Policy',
                icon: 'ios-lock-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_9__pages_support_support__["a" /* SupportPage */]
            },
            {
                title: 'Logout',
                icon: 'ios-log-out-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]
            }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.listenToLoginEvents();
    }
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:fbLogin', function (data) {
            console.log('FBLogin');
            _this.user.name = data.name;
            _this.user.email = data.email;
            _this.user.picture = data.picture;
        });
        this.events.subscribe('user:googleLogin', function (data) {
            console.log('GoogleLogin');
            _this.user.name = data.name;
            _this.user.email = data.email;
            _this.user.picture = data.picture;
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title === 'Terms of Service') {
            var ToS = this.iab.create('https://nudigift.com/tos.html', '_self', { location: 'yes' });
            ToS.show();
        }
        else if (page.title === 'Privacy Policy') {
            var PP = this.iab.create('https://nudigift.com/privacy.html', '_self', { location: 'yes' });
            PP.show();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menu-left">\n    <!-- User profile -->\n    <div text-center padding-top padding-bottom class="primary-bg menu-left">\n      <a menuClose>\n        <img class="profile-picture" [src]="user.picture">\n        <h4 ion-text light>{{user.name}}</h4>\n      </a>\n    </div>\n\n    <ion-list class="list-full-border">\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n        {{ page.title }}\n        <ion-badge color="danger" item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/app/app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLACES; });
var PLACES = [
    {
        name: "Bach Mai hospital",
        address: "Giai Phong street, Hanoi, Vietnam",
        distance: 1
    },
    {
        name: "Vietnam - France hospital",
        address: "Phuong Mai street, Hanoi, Vietnam",
        distance: 1.2
    },
    {
        name: "Pico plaza",
        address: "No 02 Truong Chinh street, Hanoi, Vietnam",
        distance: 1.3
    },
    {
        name: "Pho Vong",
        address: "Pho Vong street, Hanoi, Vietnam",
        distance: 1.4
    },
    {
        name: "iMobile",
        address: "Pho Vong street, Hanoi, Vietnam",
        distance: 1.5
    }
];
//# sourceMappingURL=mock-places.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DRIVERS; });
var DRIVERS = [
    {
        id: 1,
        name: "Edward Thomas",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Bidding"
    },
    {
        id: 2,
        name: "Denis Suarez",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Contacting"
    },
    {
        id: 3,
        name: "Karim Benzema",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Contacting"
    },
    {
        id: 4,
        name: "Martin Montoya",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Contacting"
    },
];
//# sourceMappingURL=mock-drivers.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        from: 'Royal City',
        to: 'Vietnam - France hospital',
        time: '2016-01-02'
    },
    {
        id: 2,
        from: 'BigC',
        to: 'Phao Dai Lang',
        time: '2015-12-11'
    },
    {
        id: 3,
        from: 'Royal City',
        to: '784 Lang',
        time: '2015-11-10'
    },
    {
        id: 4,
        from: 'Royal City',
        to: 'Vietnam - France hospital',
        time: '2015-11-10'
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NOTIFICATIONS; });
var NOTIFICATIONS = [
    {
        id: 1,
        title: "New price from Jan 2016",
        content: "",
        createdAt: "2016-02-14 12:00:00",
        read: true
    },
    {
        id: 2,
        title: "New version 1.1.1",
        content: "",
        createdAt: "2016-02-13 12:00:00",
        read: false
    },
    {
        id: 3,
        title: "New version 1.1.0",
        content: "",
        createdAt: "2016-02-12 12:00:00",
        read: false
    }
];
//# sourceMappingURL=mock-notifications.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ModalRatingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ModalRatingPage = /** @class */ (function () {
    function ModalRatingPage(nav) {
        this.nav = nav;
    }
    ModalRatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-rating',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/modal-rating/modal-rating.html"*/'<!--\n  Generated template for the ModalRatingPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ModalRating</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="modal-rating">\n  \n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/modal-rating/modal-rating.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ModalRatingPage);
    return ModalRatingPage;
}());

//# sourceMappingURL=modal-rating.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_places__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_method_payment_method__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finding_finding__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(nav, platform, alertCtrl, geolocation) {
        this.nav = nav;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        // map id
        this.mapId = Math.random() + 'map';
        // map height
        this.mapHeight = 480;
        // show - hide booking form
        this.showForm = false;
        // show - hide modal bg
        this.showModalBg = false;
        // list vehicles
        this.vehicles = [
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
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
        this.initPlacedetails();
    };
    // toggle form
    HomePage.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
        this.showModalBg = (this.showForm == true);
    };
    // toggle active vehicle
    HomePage.prototype.toggleVehicle = function (index) {
        for (var i = 0; i < this.vehicles.length; i++) {
            this.vehicles[i].active = (i == index);
        }
    };
    HomePage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(21.0318202, 105.8495298);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
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
        var options = { timeout: 12000, enableHighAccuracy: false };
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
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
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.map.setCenter(newLatLng);
        }, function (error) {
            console.log(error);
        }, options);
    };
    // Show note popup when click to 'Notes to driver'
    HomePage.prototype.showNotePopup = function () {
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    // Show promote code popup when click to 'Promote Code'
    HomePage.prototype.showPromoPopup = function () {
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    // go to next view when the 'Book' button is clicked
    HomePage.prototype.book = function () {
        // hide booking form
        this.toggleForm();
        // go to finding page
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__finding_finding__["a" /* FindingPage */]);
    };
    // choose pickup place
    HomePage.prototype.choosePlace = function () {
        // go to places page
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__places_places__["a" /* PlacesPage */]);
    };
    // choose payment method
    HomePage.prototype.choosePaymentMethod = function () {
        // go to payment method page
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__payment_method_payment_method__["a" /* PaymentMethodPage */]);
    };
    HomePage.prototype.next = function () {
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
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        var self = this;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    self.getInformation(results[i].place_id);
                }
                // if (results[1]) {
                //   console.log("result===", results[1].place_id);
                //   self.getInformation(results[1].place_id);
                // } else {
                //   console.log('No results found');
                // }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    };
    HomePage.prototype.getInformation = function (placeId) {
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
                    var addressType = place.address_components[i].types[0];
                    if (self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }
                }
                console.log('page > getPlaceDetail > details > ', self.placedetails);
                self.nav.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */], { info: self.placedetails });
            }
            else {
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    };
    HomePage.prototype.initPlacedetails = function () {
        this.placedetails = {
            name: '',
            address: '',
            phoneNumber: '',
            lat: '',
            lng: '',
            reviews: [],
            components: {
                route: { set: false, short: '', long: '' },
                street_number: { set: false, short: '', long: '' },
                sublocality_level_1: { set: false, short: '', long: '' },
                locality: { set: false, short: '', long: '' },
                administrative_area_level_2: { set: false, short: '', long: '' },
                administrative_area_level_1: { set: false, short: '', long: '' },
                country: { set: false, short: '', long: '' },
                postal_code: { set: false, short: '', long: '' },
                postal_code_suffix: { set: false, short: '', long: '' },
            }
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Find Store</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab center bottom>\n        <button ion-fab color="vibrant" (click)="next()" mini>NEXT</button>\n  </ion-fab>\n  <!-- Show map here -->\n  <!-- <div id="{{ mapId }}" [ngStyle]="{height: mapHeight + \'px\'}"></div> -->\n  <div #map id="map"></div>  \n\n  <div class="modal-bg black-transparent" [hidden]="!showModalBg"></div>\n\n   <!--Choose pickup and drop off places-->\n  <ion-list class="map-overlay list-full-border">\n    <ion-item (click)="choosePlace()">\n      <ion-icon name="search"></ion-icon>\n    </ion-item>\n    \n  </ion-list>\n\n  <!-- Booking information -->\n  <div class="booking-info">\n    <!--<button  ion-button color="primary"  class="button-circle button-next" [hidden]="showForm" (click)="toggleForm()">NEXT</button> -->\n\n    <!-- <div padding [ngClass]="{\'stable-bg\': !showForm, \'light\': showForm}"></div> -->\n\n    <!-- <ion-grid no-padding [hidden]="showForm">\n      <ion-row class="vehicles" text-center>\n        <ion-col class="item-vehicle" *ngFor="let vehicle of vehicles; let i = index" [ngClass]="{\'active\': vehicle.active}"\n                 (click)="toggleVehicle(i)">\n          <i class="{{ vehicle.icon }}"></i>\n          <span>{{ vehicle.name }}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  -->\n\n    <ion-list class="booking-form stable-bg list-full-border padding-10" no-margin [hidden]="!showForm">\n      <ion-item>\n        <ion-icon name="cash" item-left></ion-icon>\n        <div (click)="choosePaymentMethod()">\n          <div>Payment</div>\n          <span class="bold">Cash</span>\n        </div>\n        <ion-icon name="md-arrow-dropright" item-right></ion-icon>\n      </ion-item>\n\n      <!--<ion-item class="button-set">\n\n        <ion-grid>\n          <ion-row>\n\n            <ion-col>\n              <button  ion-button class="active" block padding>Pick-up Now</button>\n            </ion-col>\n\n            <ion-col>\n              <button  ion-button block>Pick-up Later</button>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid> \n\n      </ion-item> \n\n      <ion-item (click)="showNotePopup()">\n        <ion-icon name="ios-create-outline" item-left></ion-icon>\n        <span class="italic" ion-text color="dark"  [hidden]="note">Notes to driver</span>\n        <span ion-text color="dark"  [hidden]="!note">{{ note }}</span>\n      </ion-item> \n\n      <ion-item (click)="showPromoPopup()">\n        <ion-icon name="pricetag" item-left></ion-icon>\n        <span class="italic" ion-text color="dark"  [hidden]="promo">Promo Code</span>\n        <span ion-text color="dark"  [hidden]="!promo">{{ promo }}</span>\n      </ion-item>-->\n\n      <button  ion-button color="primary"  block (click)="book()">BOOK</button>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Upwork/Nudigift-Business/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_drivers__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverService = /** @class */ (function () {
    function DriverService() {
        this.drivers = __WEBPACK_IMPORTED_MODULE_1__mock_drivers__["a" /* DRIVERS */];
    }
    DriverService.prototype.getAll = function () {
        return this.drivers;
    };
    DriverService.prototype.getItem = function (id) {
        for (var i = 0; i < this.drivers.length; i++) {
            if (this.drivers[i].id === parseInt(id)) {
                return this.drivers[i];
            }
        }
        return null;
    };
    DriverService.prototype.remove = function (item) {
        this.drivers.splice(this.drivers.indexOf(item), 1);
    };
    DriverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DriverService);
    return DriverService;
}());

//# sourceMappingURL=driver-service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = /** @class */ (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map