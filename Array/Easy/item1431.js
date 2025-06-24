/* 
- Name: 1431. Kids With the Greatest Number of Candies
- Description: Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all
the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
- My line of thought: I needed to find the greatest number of candies first, then check if each kid's candies plus the extraCandies
is greater than or equal to that greatest number. If it is, I push true to the result array, otherwise I push false.
- Time complexity: O(n)
- Space complexity:  O(n)
*/

function kidsWithCandies (candies, extraCandies) {
    let result = [];
    let greatest = candies[0];

    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > greatest)
            greatest = candies[i];
    }

    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= greatest)
            result.push(true);
        else
            result.push(false);
    }

    return result;
};