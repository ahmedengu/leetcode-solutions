function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if (mat.length * mat[0].length !== r * c) return mat;
    const flat = mat.flat();
    return _.times(r, i => _.times(c, j => flat[c * i + j]));
};
