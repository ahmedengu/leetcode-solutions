function largestOddNumber(num: string): string {
    return num.slice(0, _.findLastIndex(num, (n) => n % 2) + 1);
};
