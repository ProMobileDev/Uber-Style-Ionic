import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the PaymentMethodPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html'
})
export class PaymentMethodPage {
  constructor(public nav: NavController) {
  }

  // apply change method
  changeMethod(method) {
    // go back
    this.nav.pop();
  }
}
