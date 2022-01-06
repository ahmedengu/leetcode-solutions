function isSameAfterReversals(num: number): boolean {
    return num === 0 || !num.toString().endsWith('0');
};
