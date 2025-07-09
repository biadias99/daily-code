/* 
- Name: 1929. Concatenation of Array
- Description: Given an integer array nums of length n, you want to create an array ans of
length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Return 
the array ans.
- My line of thought:  Just concatenate the array with itself. This can be done using the `concat`
method in JavaScript.
- Time complexity: O(n) 
- Space complexity: O(n)
*/

var getConcatenation = function(nums) {
    return nums.concat(nums)
};