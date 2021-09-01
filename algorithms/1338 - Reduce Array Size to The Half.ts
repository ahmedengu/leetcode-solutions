function minSetSize(arr: number[]): number {
    const values = Object.values<number>(_.countBy(arr)).sort((a, b) => a - b);
    let len = arr.length / 2;
    let removed = 0;
    while (values.length) {
        removed++;
        len -= values.pop();
        if (len <= 0) return removed;
    }
    return removed;
};
