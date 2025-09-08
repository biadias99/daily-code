/* 
- Name: 70. Climbing Stairs
- Description: Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
- My line of thought: This is a classic dynamic programming problem. The number of ways to reach the nth step
is the sum of the ways to reach the (n-1)th and (n-2)th steps.
- Time complexity: O(n)
- Space complexity: O(1)
*/

var climbStairs = function(n) {
    if (n <= 2) return n; // 1 ou 2 formas de subir as escadas

    let first = 1; // first - formas de subir n-2 degraus
    let second = 2; // second - formas de subir n-1 degraus

    for (let i = 3; i <= n; i++) { // itera do terceiro ate o ultimo degrau
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};