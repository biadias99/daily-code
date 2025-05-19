/* 
- Name: 202. Happy Number
- Description: Write an algorithm to determine if a number n is happy.
- My line of thought: A happy number is a number that after some rounds, returns 1.
I need to run the algorithm until turns into one. But always checking if it is starting
a loop (starting again with any number that was tested before).
- Time complexity: O(log n)
- Space complexity: O(1)
*/

function isHappy(n) {
    let digits;
    let numbers = [];

    do {
        digits = n.toString();

        if (numbers.includes(n))
            return false;
        
        numbers.push(n);
        n = 0;

        for(let i = 0; i < digits.length; i++) {
            n += Number(digits[i]) * Number(digits[i]);
        }
    } while (n != 1);
    return true;
}

