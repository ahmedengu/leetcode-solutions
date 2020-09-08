/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return _.times(n, x => {
        x = x + 1;
        let str = '';

        if (x % 3 === 0) str += 'Fizz';
        if (x % 5 === 0) str += 'Buzz';

        return str || String(x);
    })
};
