/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const arr = Array(nums.length + 1);
    let dup = 1;

    for (const num of nums) {
        if (arr[num]) dup = num;
        arr[num] = 1;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == null) return [dup, i]
    }

    return [];
};
