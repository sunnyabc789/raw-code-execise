1.快速测试
1.1 目标表数据量太大 查询过慢 则新建测试表  想办法找到表生成语句
关键字 根据已有表生成表  生成insert语句
create table if not exists yuji_lms_test2 
 (pid String,code String,type String,msg String,log_day String,log_hour String,log_time String,log_second String,sdk_version String,sampling String,times String,url String,query String,hash String,origin_url String,ip String,client_ts String,server_ts String,delay String,referrer String,spm_a String,spm_b String,spm_c String,title String,uid String,username String,user_type String,sid String,pv_id String,env String,version String,device_id String,device_brand String,device_model String,app_key String,app_name String,app_version String,browser_name String,browser_version String,os String,os_version String,ua String,sr String,dpr String,net_type String,downlink String,isp String,country String,province String,city String,visible String,grey String,p1 String,p2 String,p3 String,p4 String,p5 String,p6 String,p7 String,p8 String,p9 String,p10 String,p11 String,p12 String,p13 String,p14 String,p15 String,p16 String,p17 String,p18 String,p19 String,p20 String,p21 String,p22 String,p23 String,p24 String,p25 String,c1 String,c2 String,c3 String,c4 String,c5 String,c6 String,c7 String,c8 String,c9 String,c10 String,app_id String,source String,ds String) LIFECYCLE 7 ;

1.2 插入数据
insert into table yuji_lms_test1 (
    pid, uid, username, type, log_second, url, title, pv_id, c1  
) values 
(
    'lms', '1', '余霁',  'pv', '20230607121519', 'https%3A%2F%2Fl.cainiao.com%2Foperate%2Findirect-labor', '实操A', '1', 'a,b'
),
(
      'lms', '1', '余霁', 'api', '20230607121529', 'https%3A%2F%2Fl.cainiao.com%2Foperate%2Findirect-labor', '实操A', '1', 'a,b'
),

1.3 根据报表需求 想办法聚合

2.函数
2.1
时间计算 -> 字符类型转时间  odps函数
select url, pv_id, datediff(TO_DATE(MAX(log_second), 'yyyymmddhhmiss'),TO_DATE(MIN(log_second), 'yyyymmddhhmiss'),'ss') as duration from yuji_lms_test1 group by url, pv_id


2.2
多值列拆多行
TRANS_ARRAY(8,',',pid, uid, username, type, log_second, url, title, pv_id, c1) as (pid, uid, username, type, log_second, url, title, pv_id, c1)
 

3.系统参数
${bdp.system.bizdate}
系统参数，格式为yyyymmdd，日常调度实例定时时间的前一天（年月日）。节点每天自动调度实例定时时间年月日减1天。