function minimumMoves(s: string, idx = s.indexOf('X')): number {
    if (idx === -1) return 0;
    return 1 + minimumMoves(s, s.indexOf('X', idx + 3));
};
