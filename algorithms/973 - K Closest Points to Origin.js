/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const distance = x => Math.sqrt(x[0] ** 2 + x[1] ** 2);
    return points.sort((a, b) => distance(a) - distance(b)).slice(0, K);
};
