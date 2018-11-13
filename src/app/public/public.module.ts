import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class PublicModule { }
