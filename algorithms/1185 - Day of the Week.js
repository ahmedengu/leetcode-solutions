/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

var dayOfTheWeek = function(day, month, year) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(year, month - 1, day).getDay()];
};
