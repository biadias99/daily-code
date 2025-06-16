/* 
- Name: 1683. Invalid Tweets
- Description: Write a solution to find the IDs of the invalid tweets. The tweet is invalid if
the number of characters used in the content of the tweet is strictly greater than 15.
- My line of thought: Just select the tweet_id from the tweets table where the length of content
is greater than 15.
*/

SELECT
    tweet_id
FROM
    tweets
WHERE 
    LENGTH(content) > 15