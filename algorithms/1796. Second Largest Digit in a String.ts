function secondHighest(s: string): number {
    const count = _.countBy(s);
    for (let i = 9; i >= 0; i--)
        if (count[i]) {
            delete count[i];
            break;
        }

    for (let i = 9; i >= 0; i--)
        if (count[i]) return i;

    return -1;
};
