/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const map = _.countBy(nums);
    
    for(let i = 1; true; i++){
        if(!map[i]) return i;
    }
};
