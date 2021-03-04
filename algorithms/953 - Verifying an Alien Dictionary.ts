function isAlienSorted(words: string[], order: string): boolean {
    const map = _.mapValues(_.invert(order), Number);
    for (let i = 1; i < words.length; i++) {
        let w1 = words[i - 1];
        let w2 = words[i];

        let f = w1.length > w2.length;
        for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
            if (w1[j] !== w2[j]) {
                if (map[w1[j]] > map[w2[j]]) return false
                f = false;
                break;
            }
        }
        if (f) return false;
    }
    return true;
};
