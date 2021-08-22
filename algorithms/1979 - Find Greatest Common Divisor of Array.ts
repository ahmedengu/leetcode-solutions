function findGCD(nums: number[]): number {
    const min = _.min(nums);
    const max = _.max(nums);
    for (let i = min; i > 0; i--)
        if (min % i === 0 && max % i === 0)
            return i;
    return -1;
};
