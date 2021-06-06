function findRotation(mat: number[][], target: number[][]): boolean {
    for (let i = 0; i < 4; i++)
        if (JSON.stringify(mat = rotate(mat)) === JSON.stringify(target)) return true;
    return false;
};

const rotate = (mat: number[][]): number[][] => mat.map((row, i) => row.map((_, j) => mat[mat.length - 1 - j][i]));
