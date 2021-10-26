/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null, lvl = 0, arr = []): number[][] {
    if (!root) return arr;
    (arr[lvl] || (arr[lvl] = [])).push(root.val);
    root.children.forEach(c => levelOrder(c, lvl + 1, arr));
    return arr;
};
