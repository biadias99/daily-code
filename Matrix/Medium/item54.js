/*
- Name: 54. Spiral Matrix
- Description: Given an m x n matrix, return all elements
of the matrix in spiral order.
*/

function spiralMatrix(matrix) {
    const resultado = [];

    if (matrix.length === 0) return resultado;

    let topo = 0;
    let baixo = matrix.length - 1;
    let esquerda = 0;
    let direita = matrix[0].length - 1;

    while (topo <= baixo && esquerda <= direita) {
        // Da esquerda pra direita
        for (let j = esquerda; j <= direita; j++) {
            resultado.push(matrix[topo][j]);
        }
        topo++; // já percorreu essa linha

        // De cima pra baixo
        for (let i = topo; i <= baixo; i++) {
            resultado.push(matrix[i][direita]);
        }
        direita--; // já percorreu essa coluna

        // Da direita pra esquerda (verifica se ainda tem linha)
        if (topo <= baixo) {
            for (let j = direita; j >= esquerda; j--) {
                resultado.push(matrix[baixo][j]);
            }
            baixo--;
        }

        // De baixo pra cima (verifica se ainda tem coluna)
        if (esquerda <= direita) {
            for (let i = baixo; i >= topo; i--) {
                resultado.push(matrix[i][esquerda]);
            }
            esquerda++;
        }
    }

    return resultado;
};