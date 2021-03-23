function finalPrices(prices: number[]): number[] {
    return prices.map((x, i) => x - ~~_.find(prices, y => y <= x, i + 1));
};
