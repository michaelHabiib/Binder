import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatrialModule } from '../matrial/matrial.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatrialModule,
    RouterModule
  ],
  exports : [
    NavbarComponent,
  ]
})
export class SharedModule { }
