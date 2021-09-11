function minAddToMakeValid(S: string): number {
    let balance = 0;
    let ret = 0;
    for (const c of S) {
        balance += c === '(' ? 1 : -1;
        if (balance === -1) {
            ret++;
            balance++;
        }
    }
    return ret + balance;
};
