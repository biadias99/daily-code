/* 
- Name: 182. Duplicate Emails
- Description: Write a solution to report all the duplicate emails.
Note that it's guaranteed that the email field is not NULL.
- My line of thought: Make a subquery to find the ids of the emails that have duplicates.
Then use that subquery to select the emails from the person table.
*/

SELECT 
    email
FROM
    person
WHERE id IN (
    SELECT 
        id
    FROM
        person 
    GROUP BY
        email
    HAVING 
        COUNT(*) > 1
)

