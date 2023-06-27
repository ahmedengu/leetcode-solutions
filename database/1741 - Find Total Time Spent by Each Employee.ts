# Write your MySQL query statement below
SELECT MIN(event_day) day, MIN(emp_id) emp_id, SUM(out_time - in_time) total_time 
FROM Employees
GROUP BY event_day, emp_id
