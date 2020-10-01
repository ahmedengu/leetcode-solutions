/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const even = [], odd = [];
    A.forEach(x => {
        if (x % 2 == 0) {
            even.push(x);
        } else {
            odd.push(x);
        }
    });

    return [...even, ...odd];
};
