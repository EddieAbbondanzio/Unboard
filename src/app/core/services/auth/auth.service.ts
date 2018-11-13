import { Injectable } from '@angular/core';
import { NotImplementedError } from 'src/app/shared/errors/not-implemented-error';
import { User } from 'src/app/shared/models/user';
import { HttpClient } from 'selenium-webdriver/http';

/**
 * Service for logging in and registering with
 * the database.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * The client for sending and listening
   * for HTTP requests.
   */
  private httpClient: HttpClient;

  /**
   * Create a new auth service.
   * @param httpClient The HTTP client to use.
   */
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Log in an existing user via an access token
   * they were given earlier on.
   * @param token Their access token from a previous login.
   */
  public async loginViaToken(token: string): Promise<User> {
    throw new NotImplementedError();
  }

  /**
   * Log in an existing user via their credentials.
   * @param username The username of the user.
   * @param password The password of the user.
   * @returns The logged in user.
   */
  public async loginViaCredentials(username: string, password: string): Promise<User> {
    throw new NotImplementedError();
  }
}
