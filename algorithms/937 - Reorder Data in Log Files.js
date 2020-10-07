/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const d = [], l = [];

    for (const log of logs) {
        if (isNaN(log.split(' ')[1])) {
            l.push(log);
        } else {
            d.push(log);
        }
    }

    l.sort((a, b) => a.substring(a.indexOf(' ')).localeCompare(b.substring(b.indexOf(' '))) || a.localeCompare(b));

    return l.concat(d);
};
