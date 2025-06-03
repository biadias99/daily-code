/* 
- Name: 46. Permutations
- Description: Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
- My line of thought: Use backtracking to generate all permutations of the array.
*/

function permute(nums) {
    let res = [];

    function backtrack(path, used) {
        if (path.length === nums.length) { // se tiver 3 elementos eh porque achou uma das solucoes plausiveis
            res.push([...path]); // adiciona a solucao na resposta
            return;
        }

        for (let i = 0; i < nums.length; i++) { // for andando pelos numeros possiveis (1, 2, 3)
            if (used[i]) continue; // se tiver usado, so continua

            // marca como usado e bota o numero no path 1 -> ...
            used[i] = true;
            path.push(nums[i]);

            // vai andando mais a fundo no path seguindo o primeiro numero enviado ate juntar 3 e return
            backtrack(path, used); 

            // Desfaz a escolha
            path.pop(); // tira o 2, tira o 1
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return res;
}

permute([1, 2, 3]);
