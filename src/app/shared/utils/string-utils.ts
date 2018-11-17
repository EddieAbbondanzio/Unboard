
/**
 * Helper methods for working with strings
 */
export module StringUtils {

    /**
     * Uppercase the very first letter of the string.
     * @param The string to uppercase.
     * @returns The newly created string.
     */
    export function toUpperFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}