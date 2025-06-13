/* 
- Name: 268. Missing Number
- Description: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
- My line of thought: Iterate through the array and check if the number is present in the array.
- Time complexity: O(n*n)
- Space complexity: O(1)
*/

function missingNumber(nums) {
    for(let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i))
            return i;
    }
}

/* 

After studying a little bit more, I discovered that I could use the XOR operation to find
the missing number in O(n) time complexity and O(1) space complexity.

function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

*/