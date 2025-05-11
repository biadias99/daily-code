/* 
- Name: 627. Swap Salary
- Description: Write a solution to swap all 'f' and 'm' values
(i.e., change all 'f' values to 'm' and vice versa) with a single
update statement and no intermediate temporary tables.
- My line of thought: Use a case statement to check the value and define
the new value based on the current value.
*/

UPDATE 
    salary
SET
    sex = 
    CASE
        WHEN sex = 'm' THEN 'f'
        ELSE 'm'
    END