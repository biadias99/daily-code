/* 
- Name: 118. Pascal's Triangle
- Description: Given an integer numRows, return the first numRows of Pascal's triangle.
- My line of thought: The Pascal Triangle has always one in the beggining and end. So, this part was already all set.
The middle part is the sum of the two elements above it. So, I just needed to create a loop to go through the array
and create the new array with the sum of the two elements above it.
- Time complexity: O(numRows^2)
- Space complexity:  O(numRows^2)
- Runtime beats: 100%
- Memory beats:  56.42%
*/

function generate(numRows) {
    var output = [[1]];
    var aux = [];

    for(var i = 0; i < numRows - 1; i++) {
        aux = [1];
        for(var j = 0; j < i; j++) {
            aux.push(output[i][j] + output[i][j+1]);
        }

        aux.push(1);
        output.push(aux);
    }

    return output;
}