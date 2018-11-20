/**
 * Credentials for logging in a user into their account.
 */
export class LoginCredentials {
    /**
     * The email to log in under.
     */
    public email: string;

    /**
     * The password to log in with.
     */
    public password: string;

    /**
     * If the user want's their credentials to be 
     * saved for later use.
     */
    public rememberMe: boolean;

    /**
     * Create a new set of credentials for logging into a 
     * users account.
     * @param email The user's email.
     * @param password The user's password.
     * @param rememberMe Should we hold their JWT for later re-use.
     */
    constructor(email?: string, password?: string, rememberMe?: boolean) {
        this.email      = email;
        this.password   = password;
        this.rememberMe = rememberMe;
    }
}