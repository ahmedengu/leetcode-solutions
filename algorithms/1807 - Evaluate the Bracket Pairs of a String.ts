function evaluate(s: string, knowledge: string[][]): string {
    const map = Object.fromEntries(knowledge);
    return s.replace(/\(([^)]*)\)/g, (m, p1) => map[p1] || '?');
};
