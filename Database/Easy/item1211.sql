/* 
- Name: 1211. Queries Quality and Percentage
- Description: RWrite a solution to find each query_name, the quality and poor_query_percentage.
- My line of thought: Quality is the average rating divided by position,
and poor_query_percentage is the percentage of queries with a rating less than 3.
*/

SELECT
    query_name,
    ROUND(AVG(CAST(rating AS DECIMAL) / POSITION), 2) AS quality,
    ROUND(SUM(CASE WHEN rating < 3 THEN 1 ELSE 0 end) * 100 / COUNT(*), 2) AS poor_query_percentage
FROM
    queries
GROUP BY
    query_name;