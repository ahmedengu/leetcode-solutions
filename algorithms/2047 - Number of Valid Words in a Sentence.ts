function countValidWords(sentence: string): number {
    return sentence.split(' ').filter(isValid).length;
};

const isValid = s => {
    if (!s || s.startsWith('-') || s.endsWith('-') || /[0-9]/.test(s)) return false;
    const count = _.countBy(s);
    if (count['-'] > 1 || count['.'] > 1 || count[','] > 1 || count['!'] > 1) return false;
    if ((count['.'] && !s.endsWith('.')) || (count[','] && !s.endsWith(',')) || (count['!'] && !s.endsWith('!'))) return false;
    if (s.endsWith('-.') || s.endsWith('-,') || s.endsWith('-!')) return false;
    return true;
}
