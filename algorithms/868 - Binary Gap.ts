function binaryGap(n: number): number {
    return n.toString(2).split('1').slice(1, -1).reduce((acc, v) => Math.max(acc, v.length + 1), 0);
};
