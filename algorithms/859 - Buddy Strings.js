/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;
    if (A === B) return new Set(A.split('')).size < A.length;

    const pairs = [];

    for (let i = 0; i < A.length; i++)
        if (A[i] !== B[i]) pairs.push(A[i] + B[i]);

    return pairs.length === 2 && pairs[0] === pairs[1].split('').reverse().join('');
};
