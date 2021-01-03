function isIsomorphic(s: string, t: string): boolean {
    const map: { [key: string]: string } = {};
    const inv: { [key: string]: string } = {};
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== t[i]) {
            if (map[s[i]] || inv[t[i]]) {
                return false;
            } else {
                map[s[i]] = t[i];
                inv[t[i]] = s[i];
            }
        }
    }

    return true;
};
