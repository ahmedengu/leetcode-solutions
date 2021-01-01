/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const map = {};

    mat.forEach((r, i) => r.forEach((c, j) => {
        if (!map[i - j]) map[i - j] = [];
        map[i - j].push(mat[i][j]);
    }));

    _.forEach(map, x => x.sort((a, b) => b - a));

    return mat.map((r, i) => r.map((c, j) => map[i - j].pop()));
};
