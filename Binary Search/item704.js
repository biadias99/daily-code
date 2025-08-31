/* 
- Name: 704. Binary Search
- Description: Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums. If target exists,
then return its index. Otherwise, return -1.
- My line of thought: Apply binary search by maintaining left and right pointers,
calculating the mid index, and adjusting the pointers based on comparisons.
- Time complexity: O(log n)
- Space complexity: O(1)
*/

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1; // procura na metade esquerda
        }
        else if (target > nums[mid]) {
            left = mid + 1; // procura na metade direita
        }
    }  

    return -1; // nao encontrou
};

