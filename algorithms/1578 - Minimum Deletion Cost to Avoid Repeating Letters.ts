function minCost(s: string, cost: number[]): number {
    let p = 0;
    let minCost = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[p]) {
            if (cost[i] < cost[p]) {
                minCost += cost[i];
            } else {
                minCost += cost[p];
                p = i;
            }
        } else {
            p = i;
        }
    }
    return minCost;
};
