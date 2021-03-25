function hasAlternatingBits(n: number): boolean {
    return !n.toString(2).match(/00|11/);
};
