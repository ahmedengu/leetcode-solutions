function trimMean(arr: number[]): number {
    arr.sort((a, b) => a - b);

    arr = arr.slice(Math.ceil(arr.length * 0.05), arr.length - Math.ceil(arr.length * 0.05));

    return arr.reduce((acc, n) => acc + n, 0) / arr.length;
};
