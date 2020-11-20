/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0,
        char = ' ';

    for (let i = 0; i < s.length; i++) {
        if (char !== ' ' && s[i] === ' ') count++;
        char = s[i];
    }

    if (char !== ' ') count++;
    return count;
};
