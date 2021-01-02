function rangeBitwiseAnd(m: number, n: number): number {
    return n > m ? rangeBitwiseAnd(m >> 1, n >> 1) << 1 : m;
};
