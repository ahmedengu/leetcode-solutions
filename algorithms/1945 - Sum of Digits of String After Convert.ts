function getLucky(s: string, k: number): number {
    let nums = s.split('').map(c => c.charCodeAt(0) - 96).join('');
    while (k--) {
        nums = `${nums.split('').reduce((acc, n) => acc + +n, 0)}`;
    }
    return +nums;
};
