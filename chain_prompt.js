function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const normalized = input.trim().toLowerCase();
    if (normalized.length === 0) {
        return '';
    }

    return normalized
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/-+/g, '-')     // Replace consecutive hyphens with a single hyphen
        .replace(/^-|-$/g, '');  // Remove leading and trailing hyphens
}

// Example usage:
// console.log(toKebabCase('Hello World!')); // Output: 'hello-world!'