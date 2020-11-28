/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let ret = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let tmp;

    while (i >= 0 && j >= 0) {
        tmp = (+num1[i--]) + (+num2[j--]) + carry;
        carry = tmp > 9 ? 1 : 0;
        tmp %= 10;
        ret = tmp + ret;
    }

    while (i >= 0) {
        tmp = (+num1[i--]) + carry;
        carry = tmp > 9 ? 1 : 0;
        tmp %= 10;
        ret = tmp + ret;
    }

    while (j >= 0) {
        tmp = (+num2[j--]) + carry;
        carry = tmp > 9 ? 1 : 0;
        tmp %= 10;
        ret = tmp + ret;
    }

    return (carry || '') + ret;
};
