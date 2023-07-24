-- excel join表操作
vlookup  
相对引用：A1
行绝对引用：A$1
列绝对引用：$A1
绝对引用：$A$1




查库里所有表 
有一系列系统表 



-- sql 条件语句
select 
id,(case when canedit_latest_commit_dept_name is not null then canedit_latest_commit_dept_name else latest_commit_dept_name end) canedit_latest_commit_dept_name
from pagechangedata_fullstack
