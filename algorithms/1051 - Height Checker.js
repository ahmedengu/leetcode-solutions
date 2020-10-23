/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    return _.chain(heights)
        .sortBy()
        .reduce((acc, v, i) => acc += v !== heights[i], 0);
};
