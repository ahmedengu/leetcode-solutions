/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph, path = [], i = 0, ret = []) {
    if (i >= graph.length) return ret;

    for (const e of graph[i]) {
        allPathsSourceTarget(graph, [...path, i], e, ret);
    }

    if (i === graph.length - 1) ret.push([...path, i]);

    return ret;
};
