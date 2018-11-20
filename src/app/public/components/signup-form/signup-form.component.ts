import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'src/app/shared/common/abstract-form';
import { SignupInfo } from '../../pages/signup/signup-info';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Form for registering new users with the site.
 */
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent extends AbstractForm<SignupInfo> {
  /**
   * Generate the angular form app.
   */
  protected initFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      companyName: new FormControl('')
    });
  }
} 
