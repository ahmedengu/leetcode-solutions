/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let start = -1;
    return _.reduce(S, (acc, v, i, arr) => {
        if (i === start + 1)
            acc.push(0);

        start = Math.max(start, arr.lastIndexOf(v));
        acc[acc.length - 1]++;

        return acc;
    }, []);
};
