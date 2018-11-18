import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationSummaryComponent } from './components/validation-summary/validation-summary.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [CheckboxComponent, ValidationSummaryComponent, PanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckboxComponent,
    ValidationSummaryComponent,
    PanelComponent
  ]
})
export class SharedModule { }
