/* 
- Name: 197. Rising Temperature
- Description: Write a solution to find all dates' id with higher temperatures compared to its
previous dates (yesterday).
- My line of thought: Select the temperature of the previous day using the LAG window function.
Then filter the records where the current day's temperature is higher than the previous day's temperature.
*/

SELECT
    id
FROM (
    SELECT
        *,
        LAG(temperature) OVER (ORDER BY recordDate) AS prev_temp
    FROM
        weather
) AS sub
WHERE
    temperature > prev_temp;