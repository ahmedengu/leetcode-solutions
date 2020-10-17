/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const map = _.countBy(nums);
    const ret = [];

    _.forEach(map, (v, k) => {
        if (v === 1) ret.push(k);
    });

    return ret;
};
