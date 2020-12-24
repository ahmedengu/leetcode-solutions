/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const list = [];
    for (const i in difficulty) {
        list.push({
            d: difficulty[i],
            p: profit[i]
        });
    }
    list.sort((a, b) => b.p - a.p);
    let cost = 0;
    for (const w of worker) {
        const max = list.find(el => el.d <= w);
        cost += max && max.p || 0;
    }

    return cost;
};
