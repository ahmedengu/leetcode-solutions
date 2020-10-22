/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const ret = [], arr = S.split('');

    for (const c of arr) {
        const pop = ret.pop();
        if (c !== pop) {
            ret.push(pop, c);
        }
    }

    return ret.join('');
};
