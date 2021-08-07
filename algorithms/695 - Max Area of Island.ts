function maxAreaOfIsland(grid: number[][]): number {
    const f = _.times(grid.length, () => _.times(grid[0].length, () => false));
    let max = 0;
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[i].length; j++)
            max = Math.max(max, getArea(i, j, grid, f));

    return max;
};

const getArea = (i: number, j: number, grid: number[][], f: boolean[][]) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || f[i][j] || !grid[i][j])
        return 0;
    f[i][j] = true;
    return 1 + getArea(i + 1, j, grid, f) + getArea(i - 1, j, grid, f) + getArea(i, j + 1, grid, f) + getArea(i, j - 1, grid, f);
}
