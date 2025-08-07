/* 
- Name: 619. Biggest Single Number
- Description: A single number is a number that appeared only once in the MyNumbers table. Find the largest single number.
- My line of thought: Select the maximum number from the MyNumbers table where the number appears only once.
*/

SELECT
    MAX(num) as num
FROM
    (
        SELECT 
            num
        FROM
            myNumbers
        GROUP BY
            num
        HAVING COUNT(num) = 1
    ) as onlyOneNum