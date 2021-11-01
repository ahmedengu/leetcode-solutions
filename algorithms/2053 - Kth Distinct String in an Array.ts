function kthDistinct(arr: string[], k: number): string {
    return _.chain(arr).countBy().pickBy(c => c === 1).keys().value()[k - 1] || '';
};
