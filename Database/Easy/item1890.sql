/* 
- Name: 1890. The Latest Login in 2020
- Description: Write a solution to report the latest login for all users in the year 2020.
Do not include the users who did not login in 2020.
- My line of thought: Just need to select the user_id and the maximum time_stamp for each user,
grouping by user_id, and filtering the time_stamp to be within the year 2020.
*/

SELECT
    user_id,
    MAX(time_stamp) as last_stamp
FROM
    Logins
WHERE
    time_stamp > '2020-01-01' AND time_stamp < '2021-01-01'
GROUP BY
    user_id;