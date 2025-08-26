/* 
- Name: 2723. Add Two Promises
- Description: Given two promises promise1 and promise2, return a new promise. promise1 and
promise2 will both resolve with a number. The returned promise should resolve with the sum
of the two numbers.
- My line of thought: This is a straightforward problem. We can use Promise.all to wait for both
promises to resolve, and then sum the results. This approach is clean and efficient.
- Time complexity: O(1)
- Space complexity: O(1)
*/

var addTwoPromises = async function(promise1, promise2) {
    const [n1, n2] = await Promise.all([promise1, promise2]);
    return n1 + n2;
};

