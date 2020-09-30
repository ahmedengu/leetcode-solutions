/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const countA = _.countBy(A.split(' '));
    const countB = _.countBy(B.split(' '));
    const ret = [];

    _.forEach(countA, (v, k) => {
        if (v === 1 && !countB[k] && k) ret.push(k);
    });

    _.forEach(countB, (v, k) => {
        if (v === 1 && !countA[k] && k) ret.push(k);
    });


    return ret;
};
