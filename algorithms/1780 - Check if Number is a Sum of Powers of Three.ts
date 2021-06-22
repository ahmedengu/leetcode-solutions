function checkPowersOfThree(n: number, p = 16): boolean {
    if (p < 0) return n === 0;
    const pow = 3 ** p;
    return checkPowersOfThree(n - (pow <= n ? pow : 0), p - 1);
};
