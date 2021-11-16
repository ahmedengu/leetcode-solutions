function timeRequiredToBuy(tickets: number[], k: number): number {
    let ret = 0;
    while (tickets[k]) {
        for (let i = 0; i < tickets.length && tickets[k]; i++) {
            if (tickets[i]) {
                tickets[i]--;
                ret++;
            }
        }
    }
    return ret;
};
