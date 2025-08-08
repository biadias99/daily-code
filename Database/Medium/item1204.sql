/* 
- Name: 1204. Last Person to Fit in the Bus
- Description: There is a queue of people waiting to board a bus. However, the bus has a weight limit of 1000 kilograms,
so there may be some people who cannot board.
- My line of thought: Using a variable to keep track of the cumulative weight of people boarding the bus in order of their turn.
Select the last person whose cumulative weight does not exceed 1000 kilograms.
*/

SELECT
    person_name
FROM (
    SELECT
        q.person_name,
        q.turn,
        @sum_total := @sum_total + q.weight AS sum_total
    FROM
        queue q
    CROSS JOIN (SELECT @sum_total := 0) r
    ORDER BY 
        q.turn 
) sub
WHERE sum_total <= 1000
ORDER BY turn DESC
LIMIT 1