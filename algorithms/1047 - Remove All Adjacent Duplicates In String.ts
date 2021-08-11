function removeDuplicates(s: string): string {
    const ret = [], arr = s.split('');

    for (const c of arr) {
        const pop = ret.pop();
        if (c !== pop) {
            ret.push(pop, c);
        }
    }

    return ret.join('');
};
