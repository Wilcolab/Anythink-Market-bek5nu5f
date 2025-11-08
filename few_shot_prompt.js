function toCamelCase(str) {
    // Return empty string if input is empty
    if (!str) return '';
    
    // Replace spaces, underscores, and hyphens with spaces
    // Then split into words
    const words = str.replace(/[-_\s]+/g, ' ').split(' ');
    
    // Convert first word to lowercase
    let result = words[0].toLowerCase();
    
    // Capitalize first letter of remaining words and add them
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    
    return result;
}

// Test cases
console.log(toCamelCase('first name'));     // 'firstName'
console.log(toCamelCase('user_id'));        // 'userId'
console.log(toCamelCase('SCREEN_NAME'));    // 'screenName'
console.log(toCamelCase('mobile-number'));  // 'mobileNumber'