/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, h = x;

    while (l <= h) {
        const mid = Math.floor((l + h) / 2);
        if (mid * mid === x) {
            return mid;
        }
        if (x < mid * mid) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return h;
};
