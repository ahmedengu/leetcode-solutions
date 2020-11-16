/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let tmp;

    for (const c of s) {
        if (['(', '{', '['].includes(c)) {
            stack.push(c);
        } else {
            tmp = stack[stack.length - 1];
            if ((tmp === '(' && c === ')') || (tmp === '{' && c === '}') || (tmp === '[' && c === ']')) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
