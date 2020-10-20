/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let ret = '',
        count = 0;

    for (let i = 0, len = S.length; i < len; i += 1) {
        if (S[i] === '(') {
            if (count) {
                ret += S[i];
            }
            count += 1;
        } else {
            count -= 1;
            if (count) {
                ret += S[i];
            }
        }
    }

    return ret;
};
