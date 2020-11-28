/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let ret = '';
    let i = num1.length;
    let j = num2.length;
    let carry = 0;
    let tmp;

    while (i > 0 || j > 0) {
        tmp = (i && +num1[--i]) + (j && +num2[--j]) + carry;
        carry = tmp > 9 ? 1 : 0;
        tmp %= 10;
        ret = tmp + ret;
    }

    return (carry || '') + ret;
};
