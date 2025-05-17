/* 
- Name: 75. Sort Colors
- Description: Given an array nums with n objects colored red, white, or blue, sort
them in-place so that objects of the same color are adjacent, with the colors in the
order red, white, and blue.
- My line of thought: Algorithm DNF.
- Time complexity: O(n)
- Space complexity:  O(1)
*/

function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    let temp;

    while (mid <= high) {
        if (nums[mid] == 0) {
            temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else if (nums[mid] == 2) {
            temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
};

/* HOW THE ALGORITHM WORKS? Great for group of three things.

low = 0; mid = 0; high = 5
nums = [2, 0, 2, 1, 1, 0]

* Passo 1
nums[0] => 2
nums[0] = nums[5]
high = 4
low = 0; mid = 0; high = 4
nums = [0, 0, 2, 1, 1, 2]

* Passo 2
nums[0] => 0
nums[0] = nums[0]
low = 1; mid = 1; high = 4
nums = [0, 0, 2, 1, 1, 2]

* Passo 3

nums[1] => 0
nums[1] = nums[1]
low = 2; mid = 2; high = 4
nums = [0, 0, 2, 1, 1, 2]

* Passo 4
nums[2] => 2
nums[2] =  nums[4]
high = 3
low = 2; mid = 2; high = 3
nums = [0, 0, 1, 1, 2, 2]

* Passo 5
nums[2] => 1
mid = 3
low = 2; mid = 3; high = 3
nums = [0, 0, 1, 1, 2, 2]

* Passo 6
nums[3] = 1
mid = 4
low = 2; mid = 4; high = 3
nums = [0, 0, 1, 1, 2, 2]
*/
