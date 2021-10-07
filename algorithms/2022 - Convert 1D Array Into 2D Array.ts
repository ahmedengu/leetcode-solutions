function construct2DArray(original: number[], m: number, n: number): number[][] {
    return original.length === m * n ? _.times(m, i => _.times(n, j => original[i * n + j])) : [];
};
