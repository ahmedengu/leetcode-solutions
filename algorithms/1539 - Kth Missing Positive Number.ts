function findKthPositive(arr: number[], k: number): number {
    const set = new Set(arr);
    for (let i = 1; true; i++) {
        if (!set.has(i) && !(--k)) {
            return i;
        }
    }
};
