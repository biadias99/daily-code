/* 
- Name: 2727. Is Object Empty
- Description: Given an object or an array, return if it is empty.
- My line of thought: A lot of ways to do this, but the simplest is to just check if
  the object has any properties using a for-in loop. But I could also use Object.keys
  or Object.entries to check the length of the keys or entries, but this would create
  an array in memory, so I prefer the for-in loop.
- Time complexity: O(n)
- Space complexity: O(1)
*/

var isEmpty = function(obj) {
    for (let x in obj) return false;
    return true;
};