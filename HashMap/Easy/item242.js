/* 
- Name: 242. Valid Anagram
- Description: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
- My line of thought: I can use a hash map to count the occurrences of each character in both strings.
If the counts match for all characters, then t is an anagram of s.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function isAnagram (s, t) {
    let hashS = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (!hashS[s[i]]) {
            hashS[s[i]] = 1;
        } else {
            hashS[s[i]]++;
        }
    }

    for (let y = 0; y < t.length; y++) {
        if(!hashS[t[y]]) {
            return false;
        } else {
            hashS[t[y]]--;
        }
    }

    for (elem of Object.values(hashS)) {
        if (elem != 0) return false;
    }

    return true;
}
