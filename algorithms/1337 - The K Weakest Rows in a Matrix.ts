function kWeakestRows(mat: number[][], k: number): number[] {
    const rank = mat.map((row, i) => [_.sum(row), i]);
    rank.sort(([a, i], [b, j]) => a - b || i - j);
    return rank.slice(0, k).map(x => x[1]);
};
