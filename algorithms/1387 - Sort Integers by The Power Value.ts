function getKth(lo: number, hi: number, k: number): number {
    const range = new Array(hi - lo + 1);
    for (let i = 0; i < range.length; i++)
        range[i] = getPower(lo + i);
    return lo + range.map((v, i) => ({ v, i }), ['v']).sort((a, b) => a.v - b.v || a.i - b.i)[k - 1].i;
};

const getPower = (x: number, steps = 0): number => {
    if (x === 1) return steps;
    return getPower(x % 2 === 0 ? x / 2 : 3 * x + 1, steps + 1);
}
