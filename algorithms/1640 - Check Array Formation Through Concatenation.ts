function canFormArray(arr: number[], pieces: number[][]): boolean {
    let str = `,${arr},`;
    for (const piece of pieces) {
        str = str.replace(`,${piece},`, ',');
    }
    str = str.replace(/,/g, '');
    return !str.length;
};
