/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return _.max(accounts.map(c => _.sum(c)));
};
