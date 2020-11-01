/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let odd = 0, even = 0;

    for (const chip of chips) {
        if (chip % 2 === 0) even++;
        else odd++;
    }

    return Math.min(odd, even);
};
