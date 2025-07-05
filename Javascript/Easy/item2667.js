/* 
- Name: 2667. Create Hello World Function
- Description: Write a function createHelloWorld. It should return a new function that always returns "Hello World".
- My line of thought: Such nostalgic task! Just return a function that returns "Hello World".
- Time complexity: O(1)
- Space complexity: O(1)
*/

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
}
