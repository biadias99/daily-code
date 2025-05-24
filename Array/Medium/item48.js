/* 
- Name: 48. Rotate Image
- Description: You are given an n x n 2D matrix representing an image,
rotate the image by 90 degrees (clockwise).
- My line of thought: Transpose the matrix and then reverse each row.
*/

function rotate(matrix) {
    const n = matrix.length;

    // Transpor a matriz
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Inverter cada linha
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}