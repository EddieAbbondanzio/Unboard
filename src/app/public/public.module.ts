import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent, HomeComponent],
  exports: [NotFoundComponent]
})
export class PublicModule { }
