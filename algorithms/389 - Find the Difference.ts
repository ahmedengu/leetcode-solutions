function findTheDifference(s: string, t: string): string {
    let ret = 0;

    for (const c of s) ret ^= c.charCodeAt(0) - 97;
    for (const c of t) ret ^= c.charCodeAt(0) - 97;

    return String.fromCharCode(ret + 97);
};
