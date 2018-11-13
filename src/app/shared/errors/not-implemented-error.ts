/**
 * Indicates that a method or function has not been implemented,
 * and needs to be fixed.
 */
export class NotImplementedError extends Error {
    /**
     * Create a new not implemented error.
     * @param msg The message of the error.
     */
    constructor(msg?: string) {
        super(msg);
    }
}