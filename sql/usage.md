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


-- sql 根据一个字段的值更新同一张表的另一个字段
UPDATE pagechangedata_fullstack AS D0
SET D0.canedit_latest_commit_dept_name = (
  SELECT canedit_latest_commit_dept_name
                  FROM (SELECT D1.id,D1.canedit_latest_commit_dept_name   FROM    (
        select id,
    (case when canedit_latest_commit_dept_name is not null then canedit_latest_commit_dept_name else latest_commit_dept_name end) canedit_latest_commit_dept_name
    from pagechangedata_fullstack   
    ) AS D1) AS tt
                  WHERE D0.id=tt.id);