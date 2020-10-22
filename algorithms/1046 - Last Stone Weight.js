/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        const y = stones.pop();
        const x = stones.pop();
        if (x !== y) {
            stones.push(y - x);
        }
    }

    return stones[0] || 0;
};
