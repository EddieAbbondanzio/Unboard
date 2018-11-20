
/**
 * Callback to invoke when an abstract form performs
 * an action such as submit.
 */
export type AbstractFormCallback<T> = (value: T) => void;