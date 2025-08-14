/* 
- Name: 1517. Find Users With Valid E-mails
- Description: Write a solution to find the users who have valid emails.
- My line of thought: Select users whose email matches the specified pattern,
  ensuring it starts with a letter, contains valid characters, and ends with '@leetcode.com'.
*/

SELECT
    *
FROM
    Users
WHERE
    mail COLLATE utf8mb3_bin REGEXP '^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\.com$'