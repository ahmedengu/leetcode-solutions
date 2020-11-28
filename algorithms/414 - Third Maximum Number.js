/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

    for (const num of nums) {
        if (num > max1)[max1, max2, max3] = [num, max1, max2];
        else if (num !== max1 && num > max2)[max2, max3] = [num, max2];
        else if (num !== max1 && num !== max2 && num > max3) max3 = num;
    }

    if (Number.isFinite(max3)) return max3;
    return max1;
};
