/* 
- Name: 26. Remove Duplicates from Sorted Array
- Description: Given an integer array nums sorted in non-decreasing order,
remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number
of unique elements in nums.
- My line of thought: Since it is an array, I used a for loop to iterate.
I removed the duplicates using the splice method if it was the same as the
previous element.
- Time complexity: O(n^2)
- Space complexity: O(1)
*/

function removeDuplicates(nums) {
    let i = 1;
    do {
        if(nums[i] == nums[i-1])
            nums.splice(i, 1);
        else
            i++;
    } while (i < nums.length);
}