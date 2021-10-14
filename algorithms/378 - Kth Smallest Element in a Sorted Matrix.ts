function kthSmallest(matrix: number[][], k: number): number {
    return _.flatten(matrix).sort((a, b) => a - b)[k - 1];
};
