import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicRoutingModule } from './public/public-routing.module';
import { PublicModule } from './public/public.module';
import { ProtectedModule } from './protected/protected.module';
import { ProtectedRoutingModule } from './protected/protected-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProtectedRoutingModule,
    PublicRoutingModule,
    PublicModule,
    ProtectedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
