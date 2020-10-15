/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(x => x * x).sort((a, b) => a - b);
};
