const palindromes = function (word) {
    const strip = word.replaceAll(/[\W_/]/g, "").toLowerCase();
    const palindrome = strip.split("").reverse().join("");
    return (strip == palindrome )? true : false;
};

// Do not edit below this line
module.exports = palindromes;
