/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const rev = `${Math.abs(x)}`.split('').reverse().join('');
    if (rev > 2 ** 31 - 1) return 0;
    return (x < 0 ? -1 : 1) * rev;
};
