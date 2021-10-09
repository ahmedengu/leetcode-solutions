/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const counts = A.map(x => _.countBy(x))
        .reduce((acc, x) => _.mapValues(acc, (v, k) => x[k] && (x[k] < v ? x[k] : v))); 
    return _.reduce(counts, (acc, v, k) => acc.concat(_.times(v, _.constant(k))), []);
};
