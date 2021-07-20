function getSum(a: number, b: number): number {
    while (b) {
        const c = a & b;
        a ^= b;
        b = c << 1;
    }
    return a;
};
