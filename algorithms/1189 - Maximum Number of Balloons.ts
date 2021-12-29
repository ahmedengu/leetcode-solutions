function maxNumberOfBalloons(text: string): number {
    const count = _.countBy(text);
    const min = Math.min(count['b'], count['a'], Math.floor(count['l'] / 2), Math.floor(count['o'] / 2), count['n']);
    return isFinite(min) && min;
};
