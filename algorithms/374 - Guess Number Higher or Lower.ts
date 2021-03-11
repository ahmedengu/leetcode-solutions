/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(r: number): number {
    let l = 1;
    let mid, picked;

    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        picked = guess(mid);
        if (picked === 0) return mid;
        if (picked < 0) r = mid - 1;
        else l = mid + 1;
    }

    return -1;
};
