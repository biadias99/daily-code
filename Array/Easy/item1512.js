/* 
- Name: 1512. Number of Good Pairs
- Description: Given an array of integers nums, return the number of good pairs.
- My line of thought:  I can iterate through the array and check for pairs of indices
(i, j) where nums[i] == nums[j] and i < j.
- Time complexity: O(n*n) where n is the length of the nums array.
- Space complexity: O(1)
*/

function numIdenticalPairs(nums) {
    let goodPairs = 0;

    for(let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                goodPairs++;
            }
        }
    }

    return goodPairs;
}