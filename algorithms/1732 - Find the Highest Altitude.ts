function largestAltitude(gain: number[]): number {
    return _
        .chain(gain)
        .reduce((acc, v, i) => (acc.push(acc[i] + v), acc), [0])
        .max()
        .value();
};
