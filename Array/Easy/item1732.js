/* 
- Name: 1732. Find the Highest Altitude
- Description: You are given an integer array gain of length n where gain[i] is the net gain in
altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
- My line of thought:  I can iterate through the gain array, maintaining a running total of the altitude
and keeping track of the highest altitude encountered. If the highest altitude is negative, I return 0,
otherwise I return the highest altitude found.
- Time complexity: O(n) 
- Space complexity: O(1)
*/

function largestAltitude(gain) {
    let count = 0;
    let highest = -Infinity;

    for (let i = 0; i < gain.length; i++) {
        count += gain[i];
        highest = Math.max(highest, count);
    }   

    return highest < 0 ? 0 : highest;
}