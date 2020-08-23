/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let res = n;
    const map = {};

    while (res !== 1) {
        res = 0;

        while (n !== 0) {
            res += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }

        if (map[res]) return false;
        map[res] = true;
        n = res;
    }

    return true;
};
