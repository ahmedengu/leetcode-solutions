function heightChecker(heights: number[]): number {
    return _.chain(heights)
        .sortBy()
        .reduce((acc, v, i) => acc += v !== heights[i], 0);
};
