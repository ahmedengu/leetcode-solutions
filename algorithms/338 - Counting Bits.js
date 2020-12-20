/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    return _.times(num + 1, i => i.toString(2).replace(/0/g, '').length);
};
