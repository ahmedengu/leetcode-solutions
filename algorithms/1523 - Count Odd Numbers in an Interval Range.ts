function countOdds(low: number, high: number): number {
    let count = 0;
    
    for (; low <= high; low++) count += low & 1;

    return count;
};
