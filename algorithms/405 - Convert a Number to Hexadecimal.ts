function toHex(num: number): string {
    return (num + (num < 0 && Math.pow(2, 32))).toString(16);
};
