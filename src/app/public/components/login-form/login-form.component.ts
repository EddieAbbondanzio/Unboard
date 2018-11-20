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
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent extends AbstractForm<LoginCredentials> {
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
      rememberMe: new FormControl(false)
    });
  }
}
