/* 
- Name: 3467. Transform Array By Parity
- Description: You are given an integer array nums. Transform nums by performing the following operations
in the exact order specified.
- My line of thought: Iterate through the array, replacing even numbers with 0 and odd numbers with 1.
Then sort the array to have all 0's before 1's.
- Time complexity: O(n*log(n))
- Space complexity: O(1)
*/

function transformArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) nums[i] = 0;
        else nums[i] = 1;
    }

    return nums.sort();
};