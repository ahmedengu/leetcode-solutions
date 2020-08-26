/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, arr = [], used = {}, ret = []) {
    if (arr.length === nums.length) {
        ret.push([...arr]);
        return ret;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            used[i] = 1;
            arr.push(nums[i]);

            permute(nums, arr, used, ret);

            used[i] = 0;
            arr.pop();
        }
    }

    return ret;
};
