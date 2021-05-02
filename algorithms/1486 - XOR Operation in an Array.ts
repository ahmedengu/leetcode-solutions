function xorOperation(n: number, start: number): number {
    return _.times(n, (i) => start + 2 * i).reduce((acc, v) => acc ^= v, 0);
};
