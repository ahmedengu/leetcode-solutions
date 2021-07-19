function findComplement(num: number): number {
    return parseInt(num.toString(2).split('').map(c => 1 - +c).join(''), 2);
};
