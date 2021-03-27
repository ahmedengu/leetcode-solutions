function distributeCandies(candies: number, num_people: number): number[] {
    const ret = _.times(num_people, _.constant(0));
    let n = 0;
    while (candies) {
        for (let i = 0; i < num_people && candies; i++) {
            n = Math.min(candies, n + 1);
            candies -= n;
            ret[i] += n;
        }
    }
    return ret;
};
