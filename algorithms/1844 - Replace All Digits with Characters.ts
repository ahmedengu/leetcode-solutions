function replaceDigits(s: string): string {
    let ret = '';
    for (let i = 1; i < s.length; i += 2) ret += s[i - 1] + String.fromCharCode(s.charCodeAt(i - 1) + +s[i]);
    return ret + (ret.length !== s.length ? s[ret.length] : '');
};
