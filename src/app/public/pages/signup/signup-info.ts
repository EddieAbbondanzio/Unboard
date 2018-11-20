
/**
 * Information about a user that wants to register.
 */
export class SignupInfo {
    /**
     * Their email.
     */
    public email: string;

    /**
     * The password they want to use.
     */
    public password: string;

    /**
     * The user's actual name.
     */
    public name: string;

    /**
     * The name of the company the user works for.
     */
    public companyName?: string;
}