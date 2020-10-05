/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    return _.size(_.countBy(emails, (v, split = v.split('@')) => `${split[0].replace(/(\.)|(\+.*)/g, '')}@${split[1]}`));
};
