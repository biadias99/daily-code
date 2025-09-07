/* 
- Name: 217. Contains Duplicate
- Description: Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.
- My line of thought: I use a set to store the numbers, since a set only stores unique values,
if the size of the set is different from the length of the array, it means there are duplicates.
- Time complexity: O(n)
- Space complexity: O(n)
*/

var containsDuplicate = function(nums) {
    let set = new Set(nums);

    return set.size != nums.length;
};