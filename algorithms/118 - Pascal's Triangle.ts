function generate(numRows: number): number[][] {
    const ret = [];

    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1);
        row[0] = 1;
        row[i] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
        ret.push(row);
    }

    return ret;
};
