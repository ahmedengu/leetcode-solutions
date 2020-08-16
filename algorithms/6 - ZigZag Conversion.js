/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const ret = [];
    let down = true, row = 0;

    for (const c of s) {
        ret[row] = (ret[row] || '') + c;
        if (down) {
            row++
            if (row === numRows - 1) down = false
        } else {
            row--;
            if (row === 0) down = true;
        }
    }

    return ret.join('')
};
