
/**
 * An error for an operation that is illegal, or invalid.
 */
export class InvalidOperationError extends Error {
    /**
     * Create a new invalid operation error.
     * @param msg The message of the error.
     */
    constructor(msg: string) {
        super(msg);
    }
}