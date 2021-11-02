function minIncrementForUnique(nums: number[]): number {
    const count = _.countBy(nums);
    const len = nums.length + _.max(nums);
    let moves = 0;
    let taken = 0;
    for (let i = 0; i < len; i++) {
        if (count[i] > 1) {
            taken += count[i] - 1;
            moves -= i * (count[i] - 1);
        } else if (taken && !count[i]) {
            taken--;
            moves += i;
        }
    }
    return moves;
};
