function maxPower(s: string): number {
    let max = 0, last, count = 0;
    
    for (const c of s) {
        if (last === c) count++;
        else {
            count = 1;
            last = c;
        }
        max = Math.max(max, count);
    }
    
    return max;
};
