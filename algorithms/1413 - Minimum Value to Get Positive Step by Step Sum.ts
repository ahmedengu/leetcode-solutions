function minStartValue(nums: number[]): number {
    let min = 1;
    let sum = 0;

    for (const num of nums) {
        sum += num;
        min = Math.min(min, sum);
    }

    return min < 1 ? -min + 1 : 1;
};
