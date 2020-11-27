/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    const arr = _.times(n, () => _.times(m, _.constant(0)));
    let len = indices.length,
        i, j, c = 0;

    for (i = 0; i < len; i += 1) {
        for (j = 0; j < m; j += 1) {
            arr[indices[i][0]][j] += 1;
        }
        for (j = 0; j < n; j += 1) {
            arr[j][indices[i][1]] += 1;
        }
    }

    for (i = 0; i < n; i += 1) {
        for (j = 0; j < m; j += 1) {
            c += arr[i][j] % 2 === 1;
        }
    }

    return c;
};
