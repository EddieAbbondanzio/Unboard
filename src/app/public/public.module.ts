import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [NotFoundComponent, HomeComponent, NavBarComponent]
})
export class PublicModule { }
