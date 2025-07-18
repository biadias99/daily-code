/* 
- Name: 1075. Project Employees I
- Description: Write an SQL query that reports the average experience years of all
the employees for each project, rounded to 2 digits.
- My line of thought: Just need to join the Project and Employee tables on employee_id,
group by project_id, and calculate the average experience_years.
*/

SELECT
    p.project_id,
    ROUND(AVG(e.experience_years), 2) AS average_years
FROM
    Project p 
LEFT JOIN
    Employee e
ON
    p.employee_id = e.employee_id
GROUP BY
    p.project_id