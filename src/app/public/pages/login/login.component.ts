import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationSummaryComponent } from 'src/app/shared/components/validation-summary/validation-summary.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  /**
   * The form for logging in users.
   */
  public loginForm = new FormGroup({
    email:      new FormControl('', [
      Validators.required
    ]),
    password:   new FormControl('', [
      Validators.required
    ]),
    rememberMe: new FormControl()
  });

  @ViewChild('valSummary')
  private validationSummary: ValidationSummaryComponent;

  /**
   * User wants to attempt to log in.
   */
  public loginSubmit(): void {
    this.loginForm.markAsTouched();

    if(this.loginForm.valid) {

      console.log('LOGGGIN IN');
    }
    else {
      this.loginForm.controls['email'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();

      this.validationSummary.update(true);
    }
  }

  /**
   * Update the validation summary when leaving
   * textboxes.
   */
  public blur(): void {
      this.validationSummary.update();
  }
}
