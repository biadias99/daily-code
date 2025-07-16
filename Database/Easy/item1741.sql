/* 
- Name: 1741. Find Total Time Spent by Each Employee
- Description: Write a solution to calculate the total time in minutes spent by each employee on
each day at the office. Note that within one day, an employee can enter and leave more than once.
The time spent in the office for a single entry is out_time - in_time.
- My line of thought: Select the event day, employee id, and sum of time spent by subtracting
in_time from out_time, group by employee id and event day.
*/

SELECT
    event_day as day,
    emp_id,
    SUM(out_time - in_time) AS total_time
FROM
    employees
GROUP BY
    emp_id,
    event_day
