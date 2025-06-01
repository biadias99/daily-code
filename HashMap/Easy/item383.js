/* 
- Name: 242. Valid Anagram
- Description: Given two strings ransomNote and magazine, return true if
ransomNote can be constructed by using the letters from magazine and false otherwise.
- My line of thought: Create a hashmap to count the occurrences of each letter in the ransomNote.
Then, iterate through the magazine and decrement the count for each letter found.
Finally, check if all counts in the hashmap are zero.
- Time complexity: O(n+m)
- Space complexity: O(1)
*/

function canConstruct (ransomNote, magazine) {
    let rnMap = new Map();

    // Create the hashmap for the ransomNote
    for(let i = 0; i < ransomNote.length; i++) {
        if (!rnMap.get(ransomNote[i])) {
            rnMap.set(ransomNote[i], 1);
        } else {
            rnMap.set(ransomNote[i], rnMap.get(ransomNote[i]) + 1);
        }
    }

    // Take off the letters from the magazine array
    for(let i = 0; i < magazine.length; i++) {
        if (rnMap.get(magazine[i])) {
            rnMap.set(magazine[i], rnMap.get(magazine[i]) - 1);
        } 
    }

    // Check if any of the letters was not present in magazine
    for (value of rnMap.values()) {
        if (value !== 0)
            return false; // false if finds the letter
    }

    return true; // true if doesnt find it
};