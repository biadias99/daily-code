/* 
- Name: 141. Linked List Cycle
- Description: Given head, the head of a linked list, determine if the linked list has a cycle in it.
- My line of thought: Use an array to keep track of visited nodes. If we encounter a node that has already been visited, it means there is a cycle.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function hasCycle(head) {
    if (!head) return false;

    let visited = [];

    while (head !== null) {
        if (visited.includes(head)) {
            return true; 
        }

        visited.push(head);
        head = head.next;
    }

    return false; 
}

/* After studying a little bit more, I realized that I can use a two-pointer technique to solve this problem in O(1) space complexity.


function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) { // Using floyd's cycle detection algorithm
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // cycle
        }
    }

    return false; // no cycle
}

*/