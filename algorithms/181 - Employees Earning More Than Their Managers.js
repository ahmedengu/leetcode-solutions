# Write your MySQL query statement below
SELECT Name AS Employee
FROM Employee A
WHERE Salary > (SELECT Salary FROM Employee B WHERE B.Id = A.ManagerId)
