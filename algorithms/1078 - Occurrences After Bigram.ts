function findOcurrences(text: string, first: string, second: string): string[] {
    return text.split(' ').filter((v, i, arr) => arr[i - 2] === first && arr[i - 1] === second);
};
