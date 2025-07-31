/* 
- Name: 1693. Daily Leads and Partners
- Description: For each date_id and make_name, find the number of distinct lead_id's and distinct partner_id's.
- My line of thought: Select date_id and make_name from dailySales, and count distinct lead_id's and partner_id's.
*/


SELECT
    date_id,
    make_name,
    COUNT(DISTINCT lead_id) AS unique_leads,
    COUNT(DISTINCT partner_id) AS unique_partners
FROM
    dailySales
GROUP BY
    date_id,
    make_name