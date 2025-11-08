/**
 * String case conversion utilities
 * @module caseConverters
 */

/**
 * Converts a string to camelCase format.
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase formatted string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * // Returns 'userId'
 * toCamelCase('user_id')
 * 
 * @example
 * // Returns 'screenName' 
 * toCamelCase('SCREEN_NAME')
 * 
 * @example
 * // Returns 'mobileNumber'
 * toCamelCase('mobile-number')
 * 
 * @description
 * Converts any string to camelCase following these rules:
 * - Accepts only strings, throws TypeError otherwise
 * - Trims leading/trailing whitespace
 * - Treats spaces, underscores, hyphens and other whitespace as word separators
 * - Collapses multiple separators
 * - Returns empty string for empty or separator-only input
 * - First word is lowercase, subsequent words are capitalized
 */

/**
 * Converts a string to dot.case format.
 * 
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The dot.case formatted string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * // Returns 'user.id'
 * toDotCase('userId')
 * 
 * @example
 * // Returns 'screen.name'
 * toDotCase('SCREEN_NAME')
 * 
 * @example
 * // Returns 'mobile.number'
 * toDotCase('mobileNumber')
 * 
 * @description
 * Converts any string to dot.case following these rules:
 * - Accepts only strings, throws TypeError otherwise
 * - Trims leading/trailing whitespace
 * - Treats spaces, underscores, hyphens and camelCase as word separators
 * - Collapses multiple separators
 * - Returns empty string for empty or separator-only input
 * - All words are lowercase with dots between them
 */
 * Convert any string to camelCase.
 *
 * Rules:
 * - Accepts only strings, otherwise throws TypeError with descriptive message.
 * - Trims leading/trailing whitespace.
 * - Treats spaces, underscores and hyphens (and other whitespace) as word separators.
 * - Collapses multiple separators.
 * - Returns empty string for empty or separator-only input.
 * - Normalizes casing: first word all lower-case, subsequent words capitalized.
 *
 * Examples:
 * toCamelCase('user_id')       -> 'userId'
 * toCamelCase('SCREEN_NAME')   -> 'screenName'
 * toCamelCase('mobile-number') -> 'mobileNumber'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        const received = input === null ? 'null' : typeof input;
        throw new TypeError(`toCamelCase: expected a string but received ${received}`);
    }

    const trimmed = input.trim();
    if (trimmed === '') return '';

    // Split on spaces, tabs, newlines, underscores or hyphens (one or more).
    const parts = trimmed.split(/[\s_-]+/).filter(Boolean);
    if (parts.length === 0) return '';

    const lower = parts.map(part => part.toLowerCase());
    const [first, ...rest] = lower;
    const camel = first + rest.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    return camel;
}

module.exports = toCamelCase;


/**
 * Convert any string to dot.case.
 *
 * Rules:
 * - Accepts only strings, otherwise throws TypeError with descriptive message.
 * - Trims leading/trailing whitespace.
 * - Treats spaces, underscores, hyphens and camelCase as word separators.
 * - Collapses multiple separators.
 * - Returns empty string for empty or separator-only input.
 * - Normalizes casing: all lowercase with dots between words.
 *
 * Examples:
 * toDotCase('userId')       -> 'user.id'
 * toDotCase('SCREEN_NAME')  -> 'screen.name'
 * toDotCase('mobileNumber') -> 'mobile.number'
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        const received = input === null ? 'null' : typeof input;
        throw new TypeError(`toDotCase: expected a string but received ${received}`);
    }

    const trimmed = input.trim();
    if (trimmed === '') return '';

    // Insert dots before capitals in camelCase
    const withDots = trimmed.replace(/([A-Z])/g, '.$1');
    
    // Split on dots, spaces, underscores or hyphens
    const parts = withDots.split(/[\s._-]+/).filter(Boolean);
    if (parts.length === 0) return '';

    return parts.map(part => part.toLowerCase()).join('.');
}

module.exports = toDotCase;


