function reformat(s: string): string {
    const arr = s.split('');
    let s1 = arr.filter(x => isNaN(x as any));
    let s2 = arr.filter(x => !isNaN(x as any));
    if (s1.length < s2.length)[s2, s1] = [s1, s2];

    let ret = '';
    if (Math.abs(s1.length - s2.length) <= 1)
        while (s1.length || s2.length)
            ret = (s2.pop() || '') + (s1.pop() || '') + ret;

    return ret;
};
