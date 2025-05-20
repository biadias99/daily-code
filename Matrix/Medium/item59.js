/*
- Name: 59. Spiral Matrix II
- Description: Given a positive integer n, generate an n x n matrix
filled with elements from 1 to n2 in spiral order.
- My line of thought: I first understood the process, it is basically 
four operations: from left to right, from top to bottom, from right 
to left and from bottom to top. I needed to work with the matrix using
those operations.
*/

function generateMatrix(n) {
    const matrix = [];
    let number = 1;

    for(let i = 0; i < n; i++) {
        matrix[i] = [];
        for(let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }

    let topo = 0;
    let baixo = n - 1;
    let esquerda = 0;
    let direita = n - 1;

    while (topo <= baixo && esquerda <= direita) {
        // Da esquerda pra direita
        // preenche de 0 a 4 na primeira linha
        // baixo e direita sao meus limites
        for (let j = esquerda; j <= direita; j++) {
            matrix[topo][j] = number;
            number++;
        }
        topo++; // já percorreu essa linha, entao o topo, o quadradinho restante que eu preciso ver esta bem menor

        // De cima pra baixo
        // comeco a linha na linha do topo pq a primeira eu ja vi
        // aumento a linha ate o limite de baixo
        for (let i = topo; i <= baixo; i++) {
            matrix[i][direita] = number;
            number++;
        }
        direita--; // já percorreu essa coluna, seria 4 e 5

        // Da direita pra esquerda
        if (topo <= baixo) { // se ainda assim for menor que baixo
            for (let j = direita; j >= esquerda; j--) {
                matrix[baixo][j] = number; // povoando a ultima linha
                number++;
            }
            baixo--; // vai cada vez ficando com menos espaco pra ter que olhar
        }

        // De baixo para cima
        if (esquerda <= direita) { // se nao chegou no fim
            for (let i = baixo; i >= topo; i--) {
                matrix[i][esquerda] = number; // respeitando a coluna que esta inserida que eh esquerda
                number++;
            }
            esquerda++;
        }
    }

    return matrix;
};
