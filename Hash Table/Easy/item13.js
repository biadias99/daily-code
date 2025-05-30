/* 
- Name: 13. Roman to Integer
- Description: Given a roman numeral, convert it to an integer.
- My line of thought: I did an approach with two arrays that connects with each other.
I used two loops, one for convert to the regular roman numeral and other to check the exceptions.
This is an alternative solution to the problem not using directly hash table.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function romanToInt(s) {
    var sum = 0;
    s = s.toUpperCase();

    var values = [1, 5, 10, 50, 100, 500, 1000];
    var valuesString = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    var valuesExcludedString = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    var valuesExcluded = [2, 2, 20, 20, 200, 200];

    for(var i = 0; i < s.length; i++) {
        for(var j = 0; j < valuesString.length; j++) {
            if(s[i] == valuesString[j]) {
                sum+= values[j];
            }
        }
    }

    for(var z = 0; z < valuesExcludedString.length; z++) {
        if(s.includes(valuesExcludedString[z])) {
            sum-=valuesExcluded[z];
        }
    }
   
    return sum;
}