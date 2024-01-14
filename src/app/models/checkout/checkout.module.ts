import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { CheckoutRoutingModule } from './checkout-routing-module';
import { MatrialModule } from '../../matrial/matrial.module';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatrialModule
  ]
})
export class CheckoutModule { }
