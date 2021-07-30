function numEquivDominoPairs(dominoes: number[][]): number {
    dominoes.forEach(domino => domino.sort());
    return _.reduce(_.countBy(dominoes), (acc, v) => v > 1 ? acc + comb(v) : acc, 0);
};

const product_Range = (a, b) => {
    var prd = a,
        i = a;

    while (i++ < b) {
        prd *= i;
    }
    return prd;
}


const comb = (n, r = 2) => {
    if (n == r) {
        return 1;
    } else {
        r = (r < n - r) ? n - r : r;
        return product_Range(r + 1, n) / product_Range(1, n - r);
    }
}
