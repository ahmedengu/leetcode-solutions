function findCenter(edges: number[][]): number {
    if (edges[1][0] === edges[0][0] || edges[1][1] === edges[0][0]) return edges[0][0];
    return edges[0][1];
};
