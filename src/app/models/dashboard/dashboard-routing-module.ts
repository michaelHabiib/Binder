// dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard', pathMatch:'full',
  },
  {
    path :'course/:id',
    component:CourseDetailsComponent
  },
  {
    path :'dashboard',
    component:DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
