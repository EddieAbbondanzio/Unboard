import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationSummaryComponent } from './components/validation-summary/validation-summary.component';

@NgModule({
  declarations: [CheckboxComponent, ValidationSummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckboxComponent,
    ValidationSummaryComponent
  ]
})
export class SharedModule { }
