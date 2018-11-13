import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const protectedRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(protectedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProtectedRoutingModule { }
