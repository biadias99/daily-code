/* 
- Name: 1791. Find Center of Star Graph
- Description: You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that
there is an edge between the nodes ui and vi. Return the center of the given star graph.
- My line of thought: I used a hash table to store the number of connections each node has.
Then I iterated through the hash table to find the node with the maximum connections, which is
the center of the star graph.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function findCenter(edges) {
    let hash = new Map();
    let maxValue = -Infinity;
    let maxKey = null; 

    for (let i = 0; i < edges.length; i++) {
        for (let j = 0; j < edges[i].length; j++) {
            if (!hash.get(edges[i][j])) {
                hash.set(edges[i][j], 1);
            } else {
                hash.set(edges[i][j], hash.get(edges[i][j]) + 1);
            }
        }

    }

    for (const [key, value] of hash) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }

    return maxKey;
}

/*

After studying, I realized that I could solve this problem more efficiently by
simply checking the first two edges. The center node will be the one that appears in both
edges. This approach has a time complexity of O(1) and a space complexity of O(1).

function findCenter(edges) {
    let [a, b] = edges[0];
    let [c, d] = edges[1];

    return (a === c || a === d) ? a : b;
}
    
*/