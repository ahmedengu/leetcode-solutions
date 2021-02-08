function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = _.max(candies);
    return candies.map(x => (x + extraCandies) >= max);
};
