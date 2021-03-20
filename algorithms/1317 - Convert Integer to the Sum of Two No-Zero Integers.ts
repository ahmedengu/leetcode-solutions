function getNoZeroIntegers(n: number): number[] {
    const i = Math.trunc(Math.random() * n) + 1;
    return `${i}${n - i}`.includes('0') ? getNoZeroIntegers(n) : [i, n - i];
};
