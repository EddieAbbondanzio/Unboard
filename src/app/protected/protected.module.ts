import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProtectedRoutingModule } from './protected-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ],
  declarations: [DashboardComponent, UserProfileComponent]
})
export class ProtectedModule { }
