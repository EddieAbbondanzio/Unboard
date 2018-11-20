import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationSummaryComponent } from 'src/app/shared/components/validation-summary/validation-summary.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent {
  /**
   * The angular reactive form.
   */
  public signupForm = new FormGroup({
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
    company: new FormControl()
  });
  
  @ViewChild('valSummary')
  private validationSummary: ValidationSummaryComponent;

  constructor() { }

  /**
   * Submit the form.
   */
  public submit(): void {
    this.signupForm.markAsTouched();

    console.log('SIGN UP');
    if(this.signupForm.valid) {

    }
    else {
      this.signupForm.controls['email'].markAsTouched();
      this.signupForm.controls['password'].markAsTouched();
      this.signupForm.controls['confirmPassword'].markAsTouched();
      this.signupForm.controls['name'].markAsTouched();
      this.signupForm.controls['company'].markAsTouched();

      this.validationSummary.update(true);
    }
  }
}
