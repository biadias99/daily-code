/* 
- Name: 119. Pascal's Triangle II
- Description: Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
- My line of thought: Same as Pascal Triangle, but instead of returning the whole triangle, I just need
to return the row at index rowIndex.
- Time complexity: O(rowIndex^2)
- Space complexity:  O(rowIndex^2)
*/

function getRow(rowIndex) {
    let output = [[1]];
    let aux = [];

    for(let i = 0; i < rowIndex; i++) {
        aux = [1];
        for(let j = 0; j < i; j++) {
            aux.push(output[i][j] + output[i][j+1]);
        }

        aux.push(1);
        output.push(aux);
    }

    return output[rowIndex];
};