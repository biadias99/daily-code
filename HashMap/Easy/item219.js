/* 
- Name: 219. Contains Duplicate II
- Description: Given an integer array nums and an integer k, return true if there are
two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
- My line of thought: Use a sliding windows approach, usually used in problems with arrays.
- Time complexity: O(n)
- Space complexity: O(k)
*/

function containsNearbyDuplicate(nums, k) {
    let window = new Set(); // set the last elements, fast access (O(1)) 

    for (let i = 0; i < nums.length; i++) { // walking through the array
        // If the number is already in the window, return true
        // This means that we have found a duplicate within the range of k
        if (window.has(nums[i])) {
            return true;
        }

        window.add(nums[i])

        if(window.size > k) { // sliding the window
            // If the size of the window exceeds k, remove the oldest element
            // This ensures that we only keep the last k elements in the window
            window.delete(nums[i - k]);
        }
    }

    return false; // false if no duplicates found within the range of k
};

/* 

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true

i = 0; window = {}; adiciona 1; window = {1}
i = 1; window = {1, 2}; adiciona 2; window = {1, 2}
i = 2; window = {1, 2, 3}; adiciona 3; window = {1, 2, 3}
i = 3; window = {1, 2, 3}; ja tem 1, retorna true

*/