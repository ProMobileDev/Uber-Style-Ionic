import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TripService } from '../../services/trip-service';
/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
   // history records
   public records:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public tripService: TripService) {
    this.records = tripService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }

}
