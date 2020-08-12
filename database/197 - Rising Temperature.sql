# Write your MySQL query statement below
select w.Id from Weather w , Weather ww 
where w.Temperature > ww.Temperature AND
TO_DAYS(w.Date) - TO_DAYS(ww.Date) = 1
