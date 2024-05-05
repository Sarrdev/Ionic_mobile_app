import QRCode from 'qrcode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-qr',
  templateUrl: './code-qr.page.html',
  styleUrls: ['./code-qr.page.scss'],
})
export class CodeQRPage implements OnInit {

  qrData = 'Hello, world!'; // Les données que vous souhaitez encoder dans le code QR
  qrImage: string;

  constructor() { }

  ngOnInit() {
    this.generateQR();
  }

  async generateQR() {
    try {
      this.qrImage = await QRCode.toDataURL(this.qrData);
    } catch (err) {
      console.error('Error generating QR Code:', err);
    }
  }
}
