/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = String(n).split('');
    return arr.reduce((acc, v) => acc *= v, 1) - arr.reduce((acc, v) => acc += +v, 0);
};
