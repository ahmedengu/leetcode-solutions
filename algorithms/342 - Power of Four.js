/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return /^1(00)*$/.test(n.toString(2));
};
