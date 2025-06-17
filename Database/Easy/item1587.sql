/* 
- Name: 1587. Bank Account Summary II
- Description: Write a solution to report the name and balance of users with a balance higher than 10000.
The balance of an account is equal to the sum of the amounts of all transactions involving that account.
- My line of thought: Select the name and sum of amounts from transactions, join with users on account,
group by account, and filter with having clause for balance greater than 10000.
*/

SELECT
    u.name as name,
    SUM(amount) as balance
FROM
    transactions t
INNER JOIN
    users u
ON
    u.account = t.account
GROUP BY
    t.account
HAVING
    SUM(amount) > 10000