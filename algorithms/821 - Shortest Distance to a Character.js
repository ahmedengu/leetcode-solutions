/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let last = -Infinity, next = S.indexOf(C);
    return _.map(S, (v, i) => {
        if (v === C) {
            last = next;
            next = S.indexOf(C, i + 1);
            next = next === -1 ? Infinity : next;
            return 0;
        }
        return Math.min(i - last, next - i);
    })
};
