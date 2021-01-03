function isIsomorphic(s: string, t: string): boolean {
    const map: { [key: string]: string } = {};
    const set = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== t[i]) {
            if (map[s[i]] || set.has(t[i])) {
                return false;
            } else {
                map[s[i]] = t[i];
                set.add(t[i]);
            }
        }
    }

    return true;
};
