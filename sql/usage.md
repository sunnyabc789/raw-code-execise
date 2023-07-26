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


-- sql 根据一个字段的值更新同一张表的另一个字段  这个字段还带子查询
UPDATE pagechangedata_fullstack AS D0
SET D0.canedit_latest_commit_dept_name = (
  SELECT canedit_latest_commit_dept_name
                  FROM (SELECT D1.id,D1.canedit_latest_commit_dept_name   FROM    (
        select id,
    (case when canedit_latest_commit_dept_name is not null then canedit_latest_commit_dept_name else latest_commit_dept_name end) canedit_latest_commit_dept_name
    from pagechangedata_fullstack   
    ) AS D1) AS tt
                  WHERE D0.id=tt.id);



-- sql 根据另一个表单字段更新数据
UPDATE employees
SET salary = (
    SELECT salary
    FROM salary_info
    WHERE salary_info.employee_id = employees.employee_id
)
WHERE EXISTS (
    SELECT 1
    FROM salary_info
    WHERE salary_info.employee_id = employees.employee_id
);
上述语句中，SET语句使用了子查询的方式更新salary，WHERE语句用于限制更新范围（不更新未匹配到的记录）。注意，在使用子查询更新时，需要保证子查询结果的唯一性，否则会报错。

update pagechangedata_fullstack a left join cnpd_product_name_app_name_rel b on a.app_name = b.git_name 
set a.cnpd_product_name = b.product_name