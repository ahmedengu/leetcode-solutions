function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (words.length !== pattern.length) return false;
    const pToW = {};
    const wToP = {};
    
    for (let i = 0; i < words.length; i++) {
        if (!pToW[pattern[i]]) pToW[pattern[i]] = words[i];
        if (!wToP[words[i]]) wToP[words[i]] = pattern[i];
        if (wToP[words[i]] !== pattern[i] || pToW[pattern[i]] !== words[i]) return false;
    }

    return true;
};
