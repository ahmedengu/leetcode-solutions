function imageSmoother(M: number[][]): number[][] {
    return M.map((r, i) => r.map((_, j) => {
        let sum = 0;
        let count = 9;
        for (let ki = i - 1; ki <= i + 1; ki++)
            for (let kj = j - 1; kj <= j + 1; kj++)
                if (M[ki]?.[kj] === undefined) count--;
                else sum += M[ki][kj];

        return Math.floor(sum / count);
    }));
};
