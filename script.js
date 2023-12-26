function extendHex(shortHex) {
    // Remove the # if present and convert to uppercase
    shortHex = shortHex.replace("#", "").toUpperCase();

    // Extend the short hex code to a full hex code
    let fullHex = '';
    for (let i = 0; i < shortHex.length; i++) {
        fullHex += shortHex[i].repeat(2);
    }

    // Add the # prefix and return the full hex code
    return `#${fullHex}`;
}

// Examples
console.log(extendHex("#abc")); // expected output: "#aabbcc"
console.log(extendHex("abc"));  // expected output: "#aabbcc"
console.log(extendHex("#AbC")); // expected output: "#AABBCC"
console.log(extendHex("#f09")); // expected output: "#ff0099"
