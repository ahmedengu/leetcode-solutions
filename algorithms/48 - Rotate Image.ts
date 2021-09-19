/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const len = matrix.length;
    const copy = matrix.map(r => [...r]);
    for (let i = 0; i < len; i++)
        for (let j = 0; j < len; j++)
            matrix[i][j] = copy[len - j - 1][i];
};
