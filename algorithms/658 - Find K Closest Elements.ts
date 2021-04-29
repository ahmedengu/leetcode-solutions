function findClosestElements(arr: number[], k: number, x: number): number[] {
    return _.chain(arr)
        .sortBy(n => Math.abs(n - x))
        .slice(0, k)
        .sortBy();
};
