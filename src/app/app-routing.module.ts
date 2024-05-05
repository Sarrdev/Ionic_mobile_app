import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lading',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'lading',
    loadChildren: () => import('./pages/lading/lading.module').then( m => m.LadingPageModule)
  },
  {
    path: 'ucad',
    loadChildren: () => import('./pages/ucad/ucad.module').then( m => m.UcadPageModule)
  },
  {
    path: 'ugb',
    loadChildren: () => import('./pages/ugb/ugb.module').then( m => m.UgbPageModule)
  },
  {
    path: 'reservation/:selectRepas/:selectNombrePersonne/:selectPayment',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'code-qr',
    loadChildren: () => import('./code-qr/code-qr.module').then( m => m.CodeQrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
