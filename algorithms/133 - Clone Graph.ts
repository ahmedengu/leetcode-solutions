/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

const visited = new Map();

function cloneGraph(node: Node | null): Node | null {
    if (!node) return node;
    if (!visited.has(node)) {
        const tmp = new Node(node.val, node.neighbors);
        visited.set(node, tmp);
        tmp.neighbors = tmp.neighbors.map(cloneGraph);
    }
    return visited.get(node);
};
