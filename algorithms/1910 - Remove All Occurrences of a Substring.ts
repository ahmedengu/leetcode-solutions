function removeOccurrences(s: string, part: string): string {
    if (!s.includes(part)) return s;
    return removeOccurrences(s.replace(part, ''), part);
};
