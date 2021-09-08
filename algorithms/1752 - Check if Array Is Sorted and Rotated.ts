function check(nums: number[]): boolean {
    const str = nums.join();
    const sorted = _.sortBy(nums);
    for (let i = 0; i < nums.length; i++)
        if ([...sorted.slice(i), ...sorted.slice(0, i)].join() === str)
            return true;
    return false;
}
