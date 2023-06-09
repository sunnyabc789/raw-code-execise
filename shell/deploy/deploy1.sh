#!/bin/bash
work_dir=$(cd $(dirname $0); pwd)
cd $work_dir

rm -rf temp.tar.gz
tar xvf ./temp.tar.gz

if [ ! -d "bak/" ];then
  mkdir bak/
fi

current_create_time=`date +"%Y-%m-%d_%H-%M-%S"`
# current_create_date=`date +"%Y-%m-%d"`
if [ ! -d "bak/$current_create_time" ];then
  mkdir bak/$current_create_time
  mkdir bak/$current_create_time/js
  mkdir bak/$current_create_time/css
fi


mv alog-ware/cnbp-erp/201.0.4/js/* bak/$current_create_time/js
mv alog-ware/cnbp-erp/201.0.4/css/* bak/$current_create_time/css
rm -rf alog-ware/cnbp-erp/201.0.4/js/*
rm -rf alog-ware/cnbp-erp/201.0.4/css/*

cp temp/js/* alog-ware/cnbp-erp/201.0.4/js/
cp temp/css/* alog-ware/cnbp-erp/201.0.4/css/

rm -rf temp