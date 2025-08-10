/* 
- Name: 3541. Find Most Frequent Vowel and Consonant
- Description: Return the sum of the two frequencies.
- My line of thought: I did an approach using two maps to store the frequency of vowels and consonants.
I then find the maximum frequency for each and return their sum.
- Time complexity: O(n) - where n is the length of the input string.
- Space complexity: O(1) - since the size of the maps is limited to the number of unique characters in the input string.
*/

var maxFreqSum = function(s) {
    let vowels = new Map();
    let consonants = new Map();
    let listVowels = [97, 101, 105, 111, 117];

    s = s.toLowerCase()

    for(let i = 0; i < s.length; i++) {
        if (listVowels.includes(s[i].charCodeAt(0))) {
            vowels.set(s[i], (vowels.get(s[i]) || 0) + 1);
        } else {
            consonants.set(s[i], (consonants.get(s[i]) || 0) + 1);
        }
    }

    let maxValueVowels = vowels.size ? Math.max(...vowels.values()) : 0;
    let maxValueConsonants = consonants.size ? Math.max(...consonants.values()) : 0;

    return maxValueVowels + maxValueConsonants;
}   