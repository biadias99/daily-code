/* 
- Name: 53. Maximum Subarray
- Description: Given an integer array nums, find the subarray with the largest sum, and
return its sum.
- My line of thought: Find the maximum sum testing each element in the array. If the sum
is negative, reset it to zero. Keep track of the maximum sum found.
- Time complexity: O(n)
- Space complexity:  O(1)
*/

function maxSubArray(nums) {
    let maxSum = -Infinity;
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum > maxSum) {
            maxSum = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}