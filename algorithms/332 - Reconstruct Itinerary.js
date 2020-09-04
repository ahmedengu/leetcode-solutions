/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const map = {}, len = tickets.length;
    let i = 0, el;
    for (; i < len; i += 1) {
        const from = tickets[i][0], to = tickets[i][1];
        if (!map[from]) map[from] = [];
        if (!map[to]) map[to] = [];
        map[from].push(to);
    }

    for (i of Object.keys(map)) {
        map[i].sort();
    }


    return rec(map, 'JFK').reverse();
};

function rec(map, el, ret = []) {
    while (map[el].length) {
        rec(map, map[el].shift(), ret);
    }
    ret.push(el);
    return ret;
}
