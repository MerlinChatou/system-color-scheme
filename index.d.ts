/**
 * Type definitions for @merlin-chatou/system-color-scheme
 * This package is for managing system color scheme (Light / Dark)
 * System can be the operating system or browser settings
 */

export type ColorScheme = 'light' | 'dark';

/**
 * Get the current system color scheme
 * @returns {ColorScheme} Returns 'dark' if the system prefers dark mode, 'light' otherwise
 */
export function get(): ColorScheme;

/**
 * Returns true if the system color scheme is dark, false otherwise
 * @returns {boolean}
 */
export function isDark(): boolean;

/**
 * Add a listener for system color scheme changes
 * @param callback - Function called when system color scheme changes. Receives `true` if dark, `false` if light.
 */
export function addEventListenerOnChange(callback: (isDark: boolean) => void): void;

/**
 * Default export
 */
declare const systemColorScheme: {
    get: typeof get;
    isDark: typeof isDark;
    addEventListenerOnChange: typeof addEventListenerOnChange;
};

export default systemColorScheme;
