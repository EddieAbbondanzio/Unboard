import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PublicMasterPageComponent } from './components/public-master-page/public-master-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NotFoundComponent, HomeComponent, NavBarComponent, LoginComponent, SignupComponent, LoginFormComponent, PublicMasterPageComponent, SignupFormComponent, TermsOfUseComponent]
})
export class PublicModule { }
