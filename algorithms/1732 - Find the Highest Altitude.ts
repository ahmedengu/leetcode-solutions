function largestAltitude(gain: number[]): number {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];
        if (sum > max) max = sum;
    }

    return max;
};
