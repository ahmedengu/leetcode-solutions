function bitwiseComplement(N: number): number {
    return N ^ +`0b${N.toString(2).replace(/0/g, '1')}`;
};
