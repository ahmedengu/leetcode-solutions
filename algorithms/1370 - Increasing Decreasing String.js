/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let arr = Array.from(s);
    let ret = '',
        small = true;

    arr.sort();

    while (arr.length) {
        arr = arr.filter((x, i) => {
            if (x === ret[ret.length - 1] && i !== 0) {
                return true;
            }
            ret += x;
            return false;
        });

        arr.reverse();
    }

    return ret;
};
