/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = nums.reduce((acc, n, i) => {
        (acc[n] || (acc[n] = [])).push(i);
        return acc;
    }, {});
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const nums = this.map[target];
    return nums[Math.floor(Math.random() * nums.length)];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
