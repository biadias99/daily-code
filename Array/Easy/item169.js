/* 
- Name: 169. Majority Element
- Description: Given an array nums of size n, return the majority element.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function majorityElement(nums) {
    let hash = {};
    let major = 0;
    let majorI = 0;
    let hashK = [];

    // Walk through the array and create a hashTable to count each element
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) { // if the element already appears
            hash[nums[i]]+=1;
        } else { // if the element doesnt appear yet
            hash[nums[i]] = 1;
        }
    }

    hashK = Object.keys(hash); // get all the elements

    for(let i = 0; i < hashK.length; i++) {
        if (hash[hashK[i]] > major) {
            major = hash[hashK[i]]; // find the biggestNumber
            majorI = +hashK[i]; // set the index
        }
    }

    return majorI;
}

/* After studying a little bit more, I discovered the Boyer-Moore Voting Algorithm which it could be use
it to find the majority element.

If the count is 0, it is because it is the first element and then it is a good candidate.
If count is the same as the candidate, count++;
If it is different, count--;

Then you change the space complexity to O(1) because it does not need to use a hashTable to store the elements.
*/

function majorityElement(nums) {
    let count = 0;
    let major = null;

    for (let num of nums) {
        if (count === 0) {
            major = num;
        }

        if (num === major) {
            count++;
        } else {
            count--;
        }
    }

    return major;
}
