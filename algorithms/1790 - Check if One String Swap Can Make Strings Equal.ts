function areAlmostEqual(s1: string, s2: string): boolean {
    let diff = 0;

    for (let i = 0; i < s1.length; i++)
        if (s1[i] !== s2[i]) diff++;

    return diff === 0 || diff === 2 && !_.difference(s1.split(''), s2.split('')).length;
};
