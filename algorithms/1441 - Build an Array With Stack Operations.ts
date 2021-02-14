function buildArray(target: number[], n: number): string[] {
    const ret = [];
    let last = 1;

    for (let i = 0; i < target.length; i++) {
        ret.push('Push');

        while (last < target[i]) {
            ret.push('Pop', 'Push');
            last++;
        }
        last++;

    }

    return ret;
};
