/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n.toString(3).replace(/0/g, '') == '1';
};
