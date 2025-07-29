/* 
- Name: 1978. Employees Whose Manager Left the Company
- Description: Find the IDs of the employees whose salary is strictly less than $30000 and whose manager
left the company. When a manager leaves the company, their information is deleted from the Employees table,
but the reports still have their manager_id set to the manager that left.
- My line of thought: Select employee IDs from the Employees table where the manager_id does not exist in the Employees table,
  and the manager_id is not null, and the salary is less than 30000.
*/

SELECT
    e.employee_id
FROM
    employees e
WHERE
    e.manager_id NOT IN (SELECT ep.employee_id FROM employees ep WHERE ep.employee_id = e.manager_id) AND
    e.manager_id IS NOT NULL AND
    e.salary < 30000
ORDER BY e.employee_id 