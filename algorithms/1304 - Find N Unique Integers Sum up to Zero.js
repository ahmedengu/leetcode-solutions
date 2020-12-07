/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const ret = [];
    if (n % 2 === 1) ret.push(0);
    n = Math.floor(n / 2);
    let i = 1;
    for (; i <= n; i += 1) {
        ret.push(i);
        ret.push(-i);
    }

    return ret;
};
