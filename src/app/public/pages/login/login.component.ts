import { Component, ViewChild, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginCredentials } from '../../components/login-form/login-credentials';

/**
 * Login page for users to sign into their accounts.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  /**
   * The login form that the user fills out.
   */
  @ViewChild(LoginFormComponent)
  public loginForm: LoginFormComponent;

  /**
   * Initialization method for the component.
   */
  public ngOnInit(): void {
    this.loginForm.onSubmit = (val: LoginCredentials) => {
      console.log(val);
    };
  }
}
