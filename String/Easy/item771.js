/* 
- Name: 125. Jewels and Stones
- Description: You're given strings jewels representing the types of stones that are jewels,
and stones representing the stones you have. Each character in stones is a type of stone you have.
You want to know how many of the stones you have are also jewels.
- My line of thought: I can iterate through the stones string and check if each stone is included in the jewels string.
If it is, I will increment a count variable.
- Time complexity: O(n*m) where n is the length of stones and m is the length of jewels.
- Space complexity: O(1)
*/

function numJewelsInStones(jewels, stones) {
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++;
        }      
    }

    return count;
};