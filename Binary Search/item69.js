/* 
- Name: 69. Sqrt(x)
- Description: Given a non-negative integer x, return the square root of x rounded
down to the nearest integer. The returned integer should be non-negative as well.
- My line of thought: Select a range from 0 to x, calculate the mid value, square it,
and adjust the range based on comparisons until the exact or closest integer is found.
- Time complexity: O(log n)
- Space complexity: O(1)
*/

var mySqrt = function(x) {
    if (x < 2) return x; // 0 e 1 são casos triviais

    let left = 1, right = x, ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid; // raiz exata encontrada
        } else if (mid * mid < x) {
            ans = mid;       // atualizamos a resposta possível
            left = mid + 1;  // vamos tentar um valor maior
        } else {
            right = mid - 1; // mid*mid > x, diminuir
        }
    }

    return ans; // raiz quadrada inteira
};
