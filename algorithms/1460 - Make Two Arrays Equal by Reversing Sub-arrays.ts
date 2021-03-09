function canBeEqual(target: number[], arr: number[]): boolean {
    return JSON.stringify(arr.sort()) === JSON.stringify(target.sort());
};
