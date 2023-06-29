function smallestEvenMultiple(n: number): number {
    for (let i = n; true; i++) {
        if (i % 2 === 0 && i % n === 0) return i;
    }
};
