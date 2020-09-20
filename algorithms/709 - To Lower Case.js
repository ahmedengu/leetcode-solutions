/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return _.map(str, x => x.charCodeAt() <= 90  &&  x.charCodeAt() >= 65? String.fromCharCode(x.charCodeAt() + 32) : x).join("");
};
