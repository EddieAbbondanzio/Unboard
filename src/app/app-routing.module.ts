import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';
import { CommonModule } from '@angular/common';

let appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PublicRoutingModule }
    ]
  }
]

@NgModule({
  imports: [
    PublicRoutingModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
