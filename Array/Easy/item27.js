/* 
- Name: 27. Remove Element
- Description: Given an integer array nums and an integer val,
remove all occurrences of val in nums in-place. The order of
the elements may be changed. Then return the number of elements
in nums which are not equal to val.
- My line of thought: Since it is an array, I used a for loop to iterate.
I checked if the element is different from the value to be removed.
At the same time, I used the variable k to count the number of elements.
- Time complexity: O(n)
- Space complexity: O(1)
*/

function removeElement (nums, val) {
    var k = 0; 
    for(var i = 0; i < nums.length; i++) { 
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        } 
    }
    return k;
}

// Test cases

console.log(removeElement([3, 2, 2, 3], 3)); // 2

/*
    Desk Test
    i = 0; k = 0;
    nums = [3, 2, 2, 3]
    val = 3
    first iteration -> 3 !== 3 -> false
    i = 1; k = 0;
    second iteration -> 2 !== 3 -> true
    nums[0] = 2
    nums = [2, 2, 2, 3]
    i = 2; k = 1;
    third iteration -> 2 !== 3 -> true
    nums[1] = 2
    nums = [2, 2, 2, 3]
    i = 3; k = 2;
    fourth iteration -> 3 !== 3 -> false
    i = 4; k = 2;
    End of the loop
*/

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([1], 1)); // 0
