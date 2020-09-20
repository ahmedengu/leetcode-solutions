/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  return _.range(left, right + 1).filter(num => _.every(Array.from(String(num), Number), digit => num % digit === 0));
};
