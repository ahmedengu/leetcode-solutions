/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const vals = _.values(_.countBy(arr));

    return vals.length === (new Set(vals)).size;
};
