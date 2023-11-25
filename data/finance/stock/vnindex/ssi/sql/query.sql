-- Get Weeks --
SELECT DISTINCT year, week FROM public."History";
-- Get Symbols with History --
SELECT DISTINCT symbol FROM public."History";
-- Get Symbosl with History by Weeks --
SELECT DISTINCT symbol FROM public."History" WHERE week = {week} AND year = {year}
-- Get First and Last Day of Week
SELECT MIN(weekday_index), MAX(weekday_index) FROM public."History" WHERE week = {week} AND year = {year} AND symbol LIKE '{symbol}'
-- Get Close of First Weekday
SELECT close FROM public."History" WHERE weekday_index = {first_weekday} AND week = {week} AND year = {year} AND symbol LIKE \'{symbol}\'
-- Get Close of Last Weekday
SELECT close FROM public."History" WHERE weekday_index = {last_weekday} AND week = {week} AND year = {year} AND symbol LIKE \'{symbol}\'
