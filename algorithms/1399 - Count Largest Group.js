/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const map = {};
    let max = 0,
        ret = 0;

    for (let i = 1; i <= n; i++) {
        const sum = getSum(i);

        map[sum] = (map[sum] || 0) + 1;
        if (map[sum] > max) {
            max = map[sum];
            ret = 1;
        } else if (map[sum] === max) {
            ret++;
        }

    }

    return ret;
};

function getSum(i) {
    let sum = 0;
    while (i) {
        sum += i % 10;
        i = Math.floor(i / 10);
    }
    return sum
}
