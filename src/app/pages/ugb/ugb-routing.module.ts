import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UgbPage } from './ugb.page';

const routes: Routes = [
  {
    path: '',
    component: UgbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UgbPageRoutingModule {}
