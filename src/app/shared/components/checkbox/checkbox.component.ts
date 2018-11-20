import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgModule } from '@angular/core'
import { FormControlCallback } from '../../common/form-control-callback';

/**
 * Checkbox control that has a custom appearance over
 * the standard html checkbox. Supports reactive forms.
 */
@Component({
  selector: 'app-checkbox',
  template: '<app-checkbox {{label}}></app-checkbox>',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  /**
   * Get the checked status of the checkbox.
   */
  get value(): any {
    return this._value;
  }

  /**
   * Set the checked status of the checkbox.
   * @param The new value of the checkbox.
   */
  set value(value: any) {
    this._value = value;

    if(typeof this.onChange === 'function'){
      this.onChange(value);
    }

    if(typeof this.onTouched === 'function'){
      this.onTouched();
    }
  }

  /**
   * The text to display in the label.
   */
  @Input()
  public label: string;

  /**
   * Callback to invoke when the checkbox is changed.
   */
  public onChange: FormControlCallback;

  /**
   * Callback to invoke when the checkbox is touched.
   */
  public onTouched: FormControlCallback;
  
  /**
   * The underlying value of the checkbox.
   */
  private _value: boolean;

  constructor() {
    this._value = false;
  }

  /**
   * Set the function to call when the checkbox
   * is changed.
   * @param callback The callback function.
   */
  public registerOnChange(callback: FormControlCallback): void {
    this.onChange = callback;
  }

  /**
   * Set the function to call when the checkbox
   * is touched.
   * @param callback The callback function.
   */
  public registerOnTouched(callback: FormControlCallback): void { 
    this.onTouched = callback;
  }

  /**
   * Update the value of the checkbox.
   * @param value The value to set.
   */
  public writeValue(value: any) {
    this.value = value as boolean;
  }

  /**
   * Flip the checked status of the checkbox.
   */
  public toggle() {
    this.value = !this._value;
  }
}
