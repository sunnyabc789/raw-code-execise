#!/bin/bash
work_dir=$(cd $(dirname $0); pwd)
cd $work_dir/build

mkdir temp
mkdir temp/js
mkdir temp/css

\cp -f js/* temp/js
\cp -f css/* temp/css

tar -zcvf temp.tar.gz temp/*

echo "打包完成"