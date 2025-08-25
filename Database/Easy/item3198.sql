/* 
- Name: 3198. Find Cities in Each State
- Description: Write a solution to find all the cities in each state and combine them into a single comma-separated string.
- My line of thought: Select state and use GROUP_CONCAT to combine city names, grouping by state.
*/

SELECT
    state,
    GROUP_CONCAT(city ORDER BY city SEPARATOR ', ') AS cities
FROM
    cities
GROUP BY 
    state
ORDER BY
    state