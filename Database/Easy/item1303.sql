/* 
- Name: 1303. Find The Team Size
- Description: Write an SQL query to find the team size of each of the employees.
- My line of thought: Select the team_id and count the number of employees in each team using a common table expression (CTE).
Then join this result with the Employee table to get the team size for each employee.
*/

WITH TeamSizes AS (
    SELECT 
        team_id, 
        COUNT(*) AS team_size
    FROM 
        Employee
    GROUP BY 
        team_id
)
SELECT 
    e.employee_id,
    t.team_size
FROM
    Employee e
INNER JOIN 
    TeamSizes t
ON
    e.team_id = t.team_id;
