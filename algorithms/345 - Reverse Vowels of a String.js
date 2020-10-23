/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split('');
    const stack = arr.filter(c => 'aoeuiAOEUI'.includes(c));

    for (let i = 0; i < arr.length; i++) {
        if ('aoeuiAOEUI'.includes(arr[i])) arr[i] = stack.pop();
    }

    return arr.join('');
};
