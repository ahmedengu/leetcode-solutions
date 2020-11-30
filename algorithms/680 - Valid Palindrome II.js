/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    for (let i = 0, mid = s.length / 2; i < mid; i++)
        if (s[i] !== s[s.length - i - 1])
            return isPalindrome(split(s, i)) || isPalindrome(split(s, s.length - i - 1));

    return true;
};

const isPalindrome = (s) => s === s.split('').reverse().join('');
const split = (s, i) => s.slice(0, i) + s.slice(i + 1);
