function diagonalSum(mat: number[][]): number {
    let sum = 0;

    for (let i = 0, len = mat.length - 1; i <= len; i++) {
        sum += mat[i][i];
        if (len - i !== i) {
            sum += mat[i][len - i];
        }
    }

    return sum;
};
