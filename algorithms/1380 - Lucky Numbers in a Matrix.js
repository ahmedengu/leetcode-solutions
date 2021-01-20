/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const rlen = matrix.length,
        clen = matrix[0].length,
        row = Array(rlen),
        col = Array(clen),
        ret = [];

    for (let i = 0; i < rlen; i++) {
        for (let j = 0; j < clen; j++) {
            row[i] = Math.min(row[i] || Infinity, matrix[i][j]);
            col[j] = Math.max(col[j] || -Infinity, matrix[i][j]);
        }
    }


    for (let i = 0; i < rlen; i++) {
        for (let j = 0; j < clen; j++) {
            if (matrix[i][j] === row[i] && col[j] === row[i]) {
                ret.push(row[i]);
            }
        }
    }

    return ret;
};
