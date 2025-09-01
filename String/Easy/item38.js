/* 
- Name: 38. Count and Say
- Description: The count-and-say sequence is a sequence of digit strings defined
by the recursive formula. Given a positive integer n, return the nth element of
the count-and-say sequence.
- My line of thought: Select the first term of the sequence, which is "1". 
Then, for each subsequent term, read the previous term and count the number of
consecutive identical digits, forming the next term by concatenating the counts
and the corresponding digits.
- Time complexity: O(n*m)
- Space complexity: O(n)
*/

function countAndSay(n) {
    if (n === 1) return "1"; // Caso base

    let valorAtual = "1"; // Começamos com o primeiro termo fixo

    for (let i = 2; i <= n; i++) { // Fazemos isso n - 1 vezes
        let proximoValor = "";
        let index = 0;

        while (index < valorAtual.length) {
            let caractereAtual = valorAtual[index];
            let contagem = 1;

            // Conta quantas vezes o mesmo caractere se repete
            while (
                index + 1 < valorAtual.length &&
                valorAtual[index] === valorAtual[index + 1]
            ) {
                contagem++;
                index++;
            }

            // Concatena contagem e caractere no resultado
            proximoValor += contagem.toString() + caractereAtual;

            index++; // Avança para o próximo grupo
        }

        // Atualiza para a próxima iteração
        valorAtual = proximoValor;
    }

    return valorAtual;
}
