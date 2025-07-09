/* 
- Name: 3289. The Two Sneaky Numbers of Digitville
- Description: Return an array of size two containing the two numbers (in any order),
so peace can return to Digitville.
- My line of thought: Just iterate through the array and check if a number has already been seen.
If it has, add it to the sneaky numbers array.
- Time complexity: O(n*n)
- Space complexity: O(n)
*/

var getSneakyNumbers = function(nums) {
    let sneakyNumbers = [];
    let checkedNumbers = [];

    for(let i = 0; i < nums.length; i++) {
        if (checkedNumbers.includes(nums[i])) {
            sneakyNumbers.push(nums[i]);
        }
        checkedNumbers.push(nums[i]);
    }

    return sneakyNumbers;
};