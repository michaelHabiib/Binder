import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './Components/profile-form/profile-form.component';
import { MatrialModule } from '../../matrial/matrial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { profileRoutingModule } from './profile-routing-module';
@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    MatrialModule,
    ReactiveFormsModule,
    profileRoutingModule
  ]
})
export class ProfileModule { }
