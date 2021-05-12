function maximumPopulation(logs: number[][]): number {
    const count = logs.reduce((acc, [birth, death]) => {
        for (let i = birth - 1950; i < death - 1950; i++) acc[i]++;
        return acc;
    }, new Uint8Array(100));
    return count.indexOf(_.max(count)) + 1950;
};
