/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return _.flatten(grid).filter(x => x < 0).length;
};
