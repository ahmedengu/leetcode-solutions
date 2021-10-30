function platesBetweenCandles(s: string, queries: number[][]): number[] {
    const n = s.length;
    const plates = new Array(n + 1);
    const suffix = new Array(n + 1);
    const prefix = new Array(n + 1);
    let count = 0;
    let candle = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '|') candle = i;
        else count++;
        prefix[i] = candle;
        plates[i] = count;
    }
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '|') candle = i;
        suffix[i] = candle;
    }
    return queries.map(([l, r]) => Math.max(0, plates[prefix[r]] - plates[suffix[l]]));
};
