/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length,
        max = 0,
        min = Infinity;

    for (let i = 0; i < len; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }

    return max;
};
