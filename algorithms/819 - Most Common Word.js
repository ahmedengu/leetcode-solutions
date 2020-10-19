/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const count = _.countBy(paragraph.toLowerCase().split(/[\.\s!?',;]/));
    let max = 0,
        maxStr = '';

    _.forEach(count, (val, key) => {
        if (key && val > max && !banned.includes(key.toLowerCase())) {
            max = val;
            maxStr = key;
        }
    })

    return maxStr;
};
