import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractForm } from 'src/app/shared/common/abstract-form';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationSummaryComponent } from 'src/app/shared/components/validation-summary/validation-summary.component';
import { LoginCredentials } from './login-credentials';

/**
 * Form to process a user's email and password and
 * attempt to authenticate them with the server.
 */
@Component({
  selector: 'ui-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent extends AbstractForm<LoginCredentials> {
  /**
   * The name of the form group this form belongs to.
   */
  public group: string = 'loginForm';

  /**
   * Create a new login form.
   */
  constructor() {
    super();
    this.isValid = false;
  }

  /**
   * Submit the form and attempt to log in.
   */
  public submit(): void {
    this.formGroup.markAsTouched();

    if (this.formGroup.valid) {
      console.log('LOGGGIN IN');
    }
    else if (this.validationSummary != null) {
      this.markAllControlsAsTouched();
      this.validationSummary.update(true);
    }
  }

  /**
   * Generate the angular form group.
   */
  protected initFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      rememberMe: new FormControl()
    });
  }

}
