import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGuard } from './Core/authentication/authentication.guard';
import { PasswordDialogComponent } from './models/dashboard/password-dialog/password-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    loadChildren: () => import('./models/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [PasswordGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./models/checkout/checkout.module').then(m => m.CheckoutModule),
    canActivate: [PasswordGuard]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./models/wishlist/wishlist.module').then(m => m.WishlistModule),
    canActivate: [PasswordGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./models/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [PasswordGuard]
  },
  {
    path : 'password',
    component: PasswordDialogComponent
  },
  {
    path : '**',
    component: PasswordDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
