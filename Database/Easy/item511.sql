/* 
- Name: 511. Game Play Analysis I
- Description: Write a solution to find the first login date for each player.
- My line of thought: Just select the player_id and the minimum event_date
from the activity table, grouping by player_id to get the first login date.
*/

SELECT player_id, MIN(event_date) as first_login
FROM activity
GROUP BY player_id