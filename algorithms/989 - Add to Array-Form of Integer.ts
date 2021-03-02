function addToArrayForm(A: number[], K: number): number[] {
    return _.map(`${BigInt(A.join('')) + BigInt(K)}`, Number);
};
