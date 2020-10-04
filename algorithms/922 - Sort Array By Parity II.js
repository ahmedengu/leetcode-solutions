/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const odd = A.filter(n => n % 2 === 1);
    const even = A.filter(n => n % 2 === 0);
    const ret = [];

    while (odd.length && even.length) ret.push(even.pop(), odd.pop());
    while (even.length) ret.push(even.pop());
    while (odd.length) ret.push(odd.pop());

    return ret;
};
