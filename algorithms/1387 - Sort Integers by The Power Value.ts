function getKth(lo: number, hi: number, k: number): number {
    return lo + _.sortBy(_.times(hi - lo + 1, i => ({
        i,
        v: getPower(lo + i)
    })), ['v', 'i'])[k - 1].i;
};

const getPower = (x: number, steps = 0): number => {
    if (x === 1) return steps;
    return getPower(x % 2 === 0 ? x / 2 : 3 * x + 1, steps + 1);
}
