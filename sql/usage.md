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

-- 测试用
select a.cnpd_product_name, b.product_name from pagechangedata_fullstack a left join cnpd_product_name_app_name_rel b on a.app_name = b.git_name
-- 生效用
update pagechangedata_fullstack a left join cnpd_product_name_app_name_rel b on a.app_name = b.git_name 
set a.cnpd_product_name = b.product_name

-- 清空表
insert overwrite table table_name SELECT * FROM table_name WHERE 1=0;
-- hive 清空表
TRUNCATE TABLE table_name; 
-- 先drop 再create 会有赋权问题
-- delete 是逐行删  比较慢
DELETE FROM table_name;


-- insert
Insert into Table2(field1,field2,…) values (select value1,value2,… from Table1)
Insert into Table2(field1,field2,…) select value1,value2,… from Table1
单条插入语句写法
INSERT INTO [表名] （[列名],[列名]) 
VALUES（[列值],[列值]);

批量插入语句写法
INSERT INTO 
[表名]([列名],[列名]) 
 VALUES
([列值],[列值])),
([列值],[列值])),
([列值],[列值]));


-- excel生成insert语句
=CONCATENATE("INSERT INTO TABLENAME(id,name1,name2) VALUES('"&B2&"','"&C2&"','"&D2&"'')")


-- 重复字段合并 多行合并一行 (区别于去重)
select git_id, b_line_id, group_concat(product_id) from t group by git_id, b_line_id
git_id b_line_id product_id
a        A        1
a        A        2
b        A        1

git_id b_line_id product_id
a         A        1,2
b         A          1


EXCEPT: 求第二个数据集在第一个数据集中的补集。即输出第一个数据集包含而第二个数据集不包含的记录。





查找重复项
SELECT
    id, COUNT(*)
FROM
    page
GROUP BY
    id
HAVING 
    COUNT(*) > 1;
-- 现有 12166 12167为重复记录 not_standard_packages 不同 导致重复 底表问题
-- 发现方式(排查问题思路): 1211条记录同步到Mysql只剩1209 推测为主键冲突 即有重复id


唯一键
如果id为数字类型 用uuid 不是hash md5
或者基于hash生成uuid