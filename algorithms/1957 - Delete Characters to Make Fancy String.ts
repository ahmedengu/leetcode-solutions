function makeFancyString(s: string): string {
    let char = s[0];
    let ret = char;
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === char) {
            count++;
            if (count <= 2) ret += char;
        } else {
            char = s[i];
            ret += char;
            count = 1;
        }
    }
    return ret;
};
