/* 
- Name: 3436. Find Valid Emails
- Description: Write a solution to find all the valid email addresses. 
- My line of thought: Select user IDs and emails where the email matches a specific pattern indicating a valid format.
*/

SELECT 
    user_id,
    email
FROM 
    users
WHERE 
    email REGEXP '^[A-Za-z0-9_]+@[A-Za-z]+\\.com$'
ORDER BY 
    user_id ASC;
