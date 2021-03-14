function shuffle(nums: number[], n: number): number[] {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(nums[i], nums[i + n]);
    }
    return arr;
};
