function canFormArray(arr: number[], pieces: number[][]): boolean {
    pieces.sort((a, b) => b.length - a.length);
    let str = `,${arr},`;
    for (let i = 0; i < pieces.length; i++) {
        str = str.replace(`,${pieces[i]},`, ',');
    }
    str = str.replace(/,/g, '');
    return !str.length;
};
