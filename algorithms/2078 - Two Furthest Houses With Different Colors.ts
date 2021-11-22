function maxDistance(colors: number[]): number {
    let max = 0;
    for (let i = 0; i < colors.length / 2; i++) {
        max = Math.max(max, _.findLastIndex(colors, n => n !== colors[i]) - i);
    }
    return max;
};
