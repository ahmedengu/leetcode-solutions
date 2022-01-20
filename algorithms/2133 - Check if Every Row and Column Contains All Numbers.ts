function checkValid(matrix: number[][]): boolean {
    const n = matrix.length;
    const rows = _.times(n, () => new Set());
    const cols = _.times(n, () => new Set());

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rows[i].add(matrix[i][j]);
            cols[i].add(matrix[j][i]);
        }
    }
    
    return rows.every(s => s.size === n) && cols.every(s => s.size === n);
};
