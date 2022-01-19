function countPoints(rings: string): number {
    const rods = _.times(10, () => new Set());
    for (let i = 0; i < rings.length; i += 2) {
        rods[rings[i + 1]].add(rings[i]);
    }
    return rods.filter(r => r.size === 3).length;
};
