/* 
- Name: 1907. Count Salary Categories
- Description: Write a solution to calculate the number of bank accounts for each salary category.
- My line of thought: Select each salary category and count the number of accounts that fall into
that category using conditional aggregation.
*/

SELECT
    "Low Salary" AS category,
    COUNT(IF(income < 20000, 1, NULL)) AS accounts_count
FROM 
    accounts

UNION

SELECT
    "Average Salary" AS category,
    COUNT(IF(income BETWEEN 20000 AND 50000, 1, NULL)) AS accounts_count
FROM 
    accounts

UNION

SELECT
    "High Salary" AS category,
    COUNT(IF(income > 50000, 1, NULL)) AS accounts_count
FROM 
    accounts