/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    const len = mat.length;
    return mat.map((row, i) => {
        const rStart = Math.max(i - K, 0);
        const rEnd = Math.min(len, i + K + 1);
        const rLen = row.length;
        
        return row.map((v, j) => {
            const cStart = Math.max(j - K, 0);
            const cEnd = Math.min(rLen, j + K + 1);

            let sum = 0;
            for (let r = rStart; r < rEnd; r++)
                for (let c = cStart; c < cEnd; c++)
                    sum += mat[r][c];
            return sum;
        })
    });
};
