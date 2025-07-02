/* 
- Name: 3280. Convert Date to Binary
- Description: Return the binary representation of date.
- My line of thought: Just split the date string by '-' and convert each part to binary using Number
and toString(2).
- Time complexity: O(1)
- Space complexity: O(1)
*/

function convertDateToBinary(date) {
    let dateFormatted = date.split('-');
    
    return `${Number(dateFormatted[0]).toString(2)}-`+
           `${Number(dateFormatted[1]).toString(2)}-`+
           `${Number(dateFormatted[2]).toString(2)}`;
}