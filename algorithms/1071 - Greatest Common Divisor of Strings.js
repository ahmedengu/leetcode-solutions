/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';

    const gcd = (a, b) => a === 0 ? b : gcd( b % a , a);
    return str1.substring(0, gcd(str1.length, str2.length));
};
