/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const n = parseInt(s, 10) || 0;
    if (n < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    if (n > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    return n;
};
