/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    const set = new Set();

    for (let i = 0; i <= 100; i++) {
        for (let j = 0; j <= 100; j++) {
            let val = (x ** i) + (y ** j);
            if (val > bound) break;
            set.add(val)
        }
    }

    return [...set.values()];
};
