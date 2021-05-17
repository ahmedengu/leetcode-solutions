function sumBase(n: number, k: number): number {
    return _.sum(n.toString(k).split('').map(Number));
};
