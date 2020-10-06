/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length, curr = 1;
    while (curr && --i >= 0) {
        if (digits[i] >= 9) {
            digits[i] = 0;
            curr = 1;
        } else {
            digits[i]++;
            curr = 0;
        }
    }
    if (curr) digits.unshift(1);
    return digits;
};
