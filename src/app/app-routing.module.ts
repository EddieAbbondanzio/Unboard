import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected/protected-routing.module';

let appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProtectedRoutingModule },
      { path: '', component: PublicRoutingModule }    //Public has the 404 page so it has to go last.
    ]
  }
]

@NgModule({
  imports: [
    ProtectedRoutingModule,
    PublicRoutingModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
