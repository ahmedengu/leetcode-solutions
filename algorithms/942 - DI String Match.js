/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    const ret = [];
    let I = 0,
        D = S.length;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'I') {
            ret.push(I++);
        } else {
            ret.push(D--);
        }
    }
    if (S[S.length - 1] === 'I') {
        ret.push(I);
    } else {
        ret.push(D);
    }
    return ret;
};
