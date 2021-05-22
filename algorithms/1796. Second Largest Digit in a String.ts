function secondHighest(s: string): number {
    return Number([...new Set(s.replace(/\D/g, ''))].sort((a, b) => +b - +a)[1] ?? -1);
};
