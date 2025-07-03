/* 
- Name: 2824. Count Pairs Whose Sum is Less than Target
- Description: Given a 0-indexed integer array nums of length n and an integer target,
return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
- My line of thought: Just use two nested loops to check all pairs of indices (i, j) and count those
that satisfy the condition nums[i] + nums[j] < target.
- Time complexity: O(n*n)
- Space complexity: O(1)
*/

function countPairs(nums, target) {
    let count = 0; 

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++;
            }
        }
    }

   return count;
}