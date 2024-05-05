import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UgbPageRoutingModule } from './ugb-routing.module';

import { UgbPage } from './ugb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UgbPageRoutingModule
  ],
  declarations: [UgbPage]
})
export class UgbPageModule {}
