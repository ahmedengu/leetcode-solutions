/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    S = S.split('');
    T = T.split('');

    while (S.length || T.length)
        if (backspace(S) !== backspace(T)) return false;

    return true;
};

const backspace = (arr) => {
    let char;
    let count = 0;
    while ((char = arr.pop()) === '#' || count) {
        if (char === '#') count++;
        else count--;

    }
    return char;
}
