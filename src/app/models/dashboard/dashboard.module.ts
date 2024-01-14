import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { MatrialModule } from '../../matrial/matrial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { CourseCardComponent } from './Components/course-card/course-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscountPercentagePipe } from '../../pipes/discount-percentage.pipe';
import { FormsModule } from '@angular/forms';
import { CartWidgetComponent } from './Components/cart-widget/cart-widget.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
@NgModule({
  declarations: [
    DashboardComponent,
    PasswordDialogComponent,
    CourseCardComponent,
    DiscountPercentagePipe,
    CartWidgetComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    MatrialModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ]
})
export class DashboardModule { }
