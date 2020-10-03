/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var i = 0,
        j = S.length - 1,
        arr = S.split('');

    while (i < j) {
        if (arr[i].match(/[^a-z]/i)) {
            i++;
        } else if (arr[j].match(/[^a-z]/i)) {
            j--;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return arr.join('');
};
