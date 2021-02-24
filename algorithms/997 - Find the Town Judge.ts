function findJudge(N: number, trust: number[][]): number {
    const idx = {};
    const inv = { [N]: [] };
    
    for (const val of trust) {
        idx[val[0]] = val[1];
        (inv[val[1]] || (inv[val[1]] = [])).push(val[0]);
    }

    for (let i = 1; i <= N; i++)
        if (!idx[i] && inv[i] && inv[i].length === N - 1) return i;

    return -1;
};
