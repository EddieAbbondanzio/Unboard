
/**
 * User who has registered with the system. They can
 * create and manage boards of their own.
 */
export class User {
    /**
     * The unique id of the user.
     */
    public id: number;

    /**
     * Their unique username.
     */
    public username: string;

    /**
     * Their actual name.
     */
    public name: string;

    /**
     * Their contact email.
     */
    public email: string;
}