/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    return _.reduce(s, (acc, v) => {
        acc.count += v === 'R' ? 1 : -1;
        if (acc.count === 0) {
            acc.ret += 1;
        }
        return acc;
    }, { count: 0, ret: 0 }).ret;
};
