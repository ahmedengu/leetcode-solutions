/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const counts = {};
    let splt, domains, running, n;
    for (const d of cpdomains) {
        splt = d.split(' ');
        n = Number(splt[0]);
        domains = splt[1].split('.');
        running = domains.pop();
        for (let i = domains.length - 1; i >= -1; i--) {
            counts[running] = (counts[running] || 0) + n;
            running = domains[i] + '.' + running;
        }
    }

    return _.map(counts, (v, k) => v + ' ' + k);
};
