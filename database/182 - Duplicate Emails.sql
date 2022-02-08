# Write your MySQL query statement below
SELECT email as Email
FROM Person
GROUP BY Email
HAVING COUNT(Email) > 1
