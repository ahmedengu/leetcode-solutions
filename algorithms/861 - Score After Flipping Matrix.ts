function matrixScore(A: number[][]): number {
    const rLen = A.length;
    const cLen = A[0].length;
    const mid = Math.ceil(rLen / 2);

    for (let i = 0; i < rLen; i++)
        if (!A[i][0]) A[i] = A[i].map(n => 1 - n);

    for (let i = 0; i < cLen; i++)
        if (A.filter(r => r[i]).length < mid)
            for (let j = 0; j < rLen; j++)
                A[j][i] = 1 - A[j][i];

    return A.reduce((acc, r) => acc + parseInt(r.join(''), 2), 0);
};
