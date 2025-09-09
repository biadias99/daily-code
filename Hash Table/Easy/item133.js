/* 
- Name: 133. Clone Graph
- Description: Return a deep copy (clone) of the graph.
- My line of thought: Use a DFS approach with a hash map to keep track of visited nodes and their clones.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function cloneGraph(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(n) {
        if (visited.has(n)) {
            return visited.get(n);
        }

        const clone = new Node(n.val);

        visited.set(n, clone);

        for (let neighbor of n.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
}