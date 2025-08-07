/* 
- Name: 1678. Goal Parser Interpretation
- Description: You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G",
"()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" 
as the string "al". The interpreted strings are then concatenated in the original order.
- My line of thought: Just iterate through the string and check for each character what it is. If it's 'G', append 'G' to the result.
If it's '(', check the next character to determine if it's '()' or '(al)' and append the corresponding string to the result.
- Time complexity: O(n)
- Space complexity: O(n)
*/

class Solution {
    public String interpret(String command) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < command.length(); i++) {
            if (command.charAt(i) == 'G') {
                result.append(command.charAt(i));
            }
            else if (command.charAt(i) == '(' && command.charAt(i + 1) == ')') {
                result.append('o');
            }
            else if (command.charAt(i) == 'a' && command.charAt(i + 1) == 'l') {
                result.append("al");
            }
        }

        return result.toString();
    }
}