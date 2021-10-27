function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let ret = 0;
    for (let i = 0; i < timeSeries.length - 1; i++)
        ret += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    return ret + duration;
};
