const reverseString = function(string) {
    // string to array
    const array = string.split("");
    // reverse array
    const reverseArray = array.reverse();
    // turn array into reverseString
    const reverseString = reverseArray.join("")
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
