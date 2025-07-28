/* 
- Name: 595. Big Countries
- Description: Write a solution to find the name, population, and area of the big countries.
- My line of thought: Select the name, population, and area from the world table where the
area is at least 3 million or the population is at least 25 million.
*/

SELECT
    name,
    population,
    area
FROM
    world
WHERE
    area >= 3000000 OR
    population >= 25000000