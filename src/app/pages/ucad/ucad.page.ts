import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ucad',
  templateUrl: './ucad.page.html',
  styleUrls: ['./ucad.page.scss'],
})
export class UcadPage implements OnInit {
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
