/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let h = numbers.length - 1,
        l = 0,
        sum;
    while (l < h) {
        sum = numbers[l] + numbers[h];
        if (sum === target) break;
        if (sum > target) {
            h--;
        } else {
            l++;
        }
    }

    return [l + 1, h + 1];
};
