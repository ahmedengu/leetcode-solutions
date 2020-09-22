/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const set = new Set(J);
    return _.reduce(S, (acc, x) => acc += set.has(x) ? 1 : 0, 0);
};
