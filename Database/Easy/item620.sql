/* 
- Name: 620. Not Boring Movies
- Description: Write a solution to report the movies with an odd-numbered ID
and a description that is not "boring".
- My line of thought: Select all columns from the cinema table where the ID is odd
and the description is not "boring". Order the results by rating in descending order.
*/

SELECT *
FROM cinema
WHERE MOD(id, 2) <> 0 AND description <> 'boring'
ORDER BY rating DESC

/* It could be also used id % 2 = 1 instead of MOD(id, 2) <> 0 */