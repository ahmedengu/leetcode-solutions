function groupThePeople(groupSizes: number[]): number[][] {
    const ret = [];
    const groups = {};

    for (let i = 0; i < groupSizes.length; i++)
        (groups[groupSizes[i]] || (groups[groupSizes[i]] = [])).push(i);

    for (const [key, value] of Object.entries < number[] > (groups)) {
        ret.push([]);
        while (value.length) {
            if (ret[ret.length - 1].length >= Number(key)) {
                ret.push([]);
            }
            ret[ret.length - 1].push(value.pop());
        }
    }

    return ret;
};
