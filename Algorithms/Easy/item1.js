/* 
- Name: Two Sum
- Description: Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
- My line of thought: When find a combination of two numbers that the sum is equal to
the target, just return the index of these two numbers. But it does need to use two
loops for that. And the time complexity is O(n^2) because of those two loops.
- Time complexity: O(n^2)
- Space complexity: O(1) because I did not use any extra space.
*/

function twoSum (nums, target) { 
    for(var i = 0; i < nums.length; i++) { 
        for(var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}

// Test cases

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
