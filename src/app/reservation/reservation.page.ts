import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // Importez NavController

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  selectRepas: string;
  selectNombrePersonne: string;
  selectPayment: string;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController) {
    //recuperer les parametres de l'url
    this.route.params.subscribe(params => {
      this.selectRepas = params['selectRepas'];
      this.selectNombrePersonne = params['selectNombrePersonne'];
      this.selectPayment = params['selectPayment'];
    });
   }
  


  ngOnInit() {
  }

  redirect() {
    // Naviguer vers la nouvelle page
    this.navCtrl.navigateForward('/code-qr');
  }

}
