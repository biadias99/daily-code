/* 
- Name: 1365. How Many Numbers Are Smaller Than the Current Number
- Description: Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
- My line of thought: Iterate through each element and compare it with every other element to count how many are smaller.
- Time complexity: O(n*n) because I used two nested loops to compare each element with every other element.
- Space complexity: O(1) because I did not use any extra space except for the result array.
*/

var smallerNumbersThanCurrent = function(nums) {
    let result = new Array(nums.length).fill(0);

    for(let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j != i && nums[j] < nums[i]) {
                result[i]++;
            }
        }
    }

    return result;
};