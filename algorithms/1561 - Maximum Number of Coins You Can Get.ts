function maxCoins(piles: number[]): number {
    piles.sort((a, b) => b - a);
    let ret = 0;
    for (let i = 0; i < piles.length; i += 2) {
        ret += piles[i + 1] || 0;
        piles.pop();
    }
    return ret;
};
