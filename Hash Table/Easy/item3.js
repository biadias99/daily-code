/* 
- Name: 3. Longest Substring Without Repeating Characters
- Description: Given a string s, find the length of the longest substring without duplicate characters.
- My line of thought: Selected the sliding window approach with two pointers and a hash map to track
characters and their indices.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function lengthOfLongestSubstring(s) {              
  let map = new Map();                              
  let left = 0, maxLen = 0;                          

  for (let right = 0; right < s.length; right++) {   
    if (map.has(s[right])) {                        
      left = Math.max(left, map.get(s[right]) + 1);  
    }                                                

    map.set(s[right], right);                       
    maxLen = Math.max(maxLen, right - left + 1);    
  }                                                  

  return maxLen;                                     
}                                                 
