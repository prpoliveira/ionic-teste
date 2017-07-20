import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Paulo Roberto de Paula Oliveira";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public idade():number{
  	let Atual = 2017;
  	let Nasceu = 1983;
  	let total = Atual - Nasceu;

  	return total;
  }

    public idadeAlert(){
  	let Atual = 2017;
  	let Nasceu = 1983;
  	let total = Atual - Nasceu;

  	alert("A idade é: "+total);
  }

  ionViewDidLoad() {
    //this.idadeAlert();
    //console.log('ionViewDidLoad FeedPage');
  }

}
