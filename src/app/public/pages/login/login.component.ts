import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  /**
   * User wants to attempt to log in.
   */
  public loginSubmit(): void {
    this.loginForm.markAsTouched();
    console.log("LOGGGGING IN", this.loginForm.controls);
  }
}
