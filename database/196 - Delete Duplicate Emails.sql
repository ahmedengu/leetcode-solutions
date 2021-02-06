# Write your MySQL query statement below
DELETE person1
FROM   person person1,
       person person2
WHERE  person1.id > person2.id
       AND person1.email = person2.email 
