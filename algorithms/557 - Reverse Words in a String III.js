/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(x => x.split('').reverse().join('')).join(' ');
};
