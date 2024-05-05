import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route: Router, public navCtrl: NavController) {}

  linkUcad(){
    this.route.navigate(['/ucad'])
  }

  linkUgb(){
    this.route.navigate((['/ugb']))
  }
}
