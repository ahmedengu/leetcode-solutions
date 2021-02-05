function singleNumber(nums: number[]): number {
    return _.reduce(_.countBy(nums), (acc, v, k) => v === 1 ? k : acc);
};
