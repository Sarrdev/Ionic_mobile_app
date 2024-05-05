import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UcadPageRoutingModule } from './ucad-routing.module';

import { UcadPage } from './ucad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UcadPageRoutingModule
  ],
  declarations: [UcadPage]
})
export class UcadPageModule {}
