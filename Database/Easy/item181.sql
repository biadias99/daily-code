/* 
- Name: 181. Employees Earning More Than Their Managers
- Description: Write a solution to find the employees who earn more than their managers.
- My line of thought: Use a subquery to compare each employee's salary with their manager's salary.
*/

SELECT 
    e.name as employee
FROM employee e
WHERE 
    e.managerId IS NOT NULL 
    AND e.salary > (SELECT salary FROM employee WHERE id = e.managerId)
