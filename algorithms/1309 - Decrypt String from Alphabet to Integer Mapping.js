/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let ret = '';

    for (let i = 0, len = s.length; i < len; i += 1) {
        if (s[i + 2] === '#') {
            ret += String.fromCharCode(96 + parseInt(s.substr(i, 2)));
            i += 2;
        } else {
            ret += String.fromCharCode(96 + parseInt(s[i]));
        }
    }

    return ret;
};
