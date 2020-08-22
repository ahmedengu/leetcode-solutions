/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let c = 0,
        i = 5;
    while (n / i >= 1) {
        c += (n / i) | 0;
        i *= 5;
    }

    return c;
};
