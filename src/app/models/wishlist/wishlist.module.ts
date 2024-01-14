import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { MatrialModule } from '../../matrial/matrial.module';
import { wishlistRoutingModule } from './wishlist-Routing-module';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    MatrialModule,
    wishlistRoutingModule
  ]
})
export class WishlistModule { }
