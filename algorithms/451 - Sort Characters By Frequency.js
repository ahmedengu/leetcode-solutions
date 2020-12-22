/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    s = s.split('');
    const count = _.countBy(s);
    s.sort((a, b) => count[b] - count[a] || b.localeCompare(a));
    return s.join('');
};
