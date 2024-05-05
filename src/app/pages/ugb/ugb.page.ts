import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ugb',
  templateUrl: './ugb.page.html',
  styleUrls: ['./ugb.page.scss'],
})
export class UgbPage implements OnInit {
  selectRepas: string;
  selectNombrePersonne: string;
  selectPayment: string;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  //fonction appelée lors de la réservation
  reserver(){
    this.navCtrl.navigateForward(`/reservation/${this.selectRepas}/${this.selectNombrePersonne}/${this.selectPayment}`)
  }

  

}
