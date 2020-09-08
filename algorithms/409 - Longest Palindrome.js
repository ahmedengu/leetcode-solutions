/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const counts = _.countBy(s);

    let odd = 0, even = 0;
    for (const k in counts) {
        const v = counts[k];
        if (v % 2 === 0) {
            even += v;
        } else {
            even += v - 1;
            odd = 1;
        }
    }

    return even + odd;
};
