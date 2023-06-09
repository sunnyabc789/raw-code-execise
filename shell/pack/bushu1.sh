
# 1
#!/bin/bash

git config --list
npm config ls
rm -f *.tmp
npm -v

#清除上次编译
npm run clean
rm -rf package-lock.json

IBM_DB_INSTALLER_URL=http://192.168.0.202/installer/linuxx64_odbc_cli.tar.gz
#安装依赖
npm run i
[[ $? -ne 0 ]] && exit -1

#npm i sugo-analytics-extend-nh
#npm uninstall sugo-sdk-js
#npm i sugo-sdk-js

# 强制安装最新的plywood，以免缓存了没安装
#npm i sugo-plywood

#sed -i -e 's/os.cpus().length/2/g' config.default.js
rm -rf .happypack
rm -rf .ugly-cache
npm run deploy
[[ $? -ne 0 ]] && exit -1

# 每个扩展包都打包
#NODE_PACK_PATH=$JENKINS_HOME/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs-v8.12.0 npm run pack

# 只打特定扩展包,多个扩展包用 “,”分割
#NODE_PACK_PATH=/data3/projects/release/node PACK_NAME=saas-cluster,wxj,ec,tsa npm run pack
NODE_PACK_PATH=$JENKINS_HOME/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs-v8.16.0 PACK_NAME=standard
#NODE_PACK_PATH=$JENKINS_HOME/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs-v8.16.0 PACK_NAME=standard,gzrailway
#NODE_PACK_PATH=$JENKINS_HOME/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs-v8.16.0 PACK_NAME=standard,zuolin
#NODE_PACK_PATH=$JENKINS_HOME/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs-v8.12.0 PACK_NAME=standard,wxj,xyyh
#NODE_PACK_PATH=$JENKINS_HOME/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs-v8.16.0  PACK_NAME=zuolin
#NODE_PACK_PATH=$JENKINS_HOME/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejs-v8.16.0 PACK_NAME=standard,zuolin 

NODE_PACK_PATH=$NODE_PACK_PATH PACK_NAME=$PACK_NAME npm run pack

rm -f *.tmp

# 如果发布full包，配置PACK_NAME=standard


# ================================================
# 拷贝编译成功文件到test目录
mkdir -p test/history-pack

cp test/*.gz  test/history-pack/ 2>/dev/null
rm -rf test/*.gz

cp -rf analytics-pack/*.gz test/

chmod 755 test/*.gz
md5sum test/*.tar.gz

echo '200:/data1/yum_src/SG/centos6/beta'
cat  analytics-pack/sugo-analytics/analytics/version

echo ">>>>PACK_NAME:$PACK_NAME"
pack_path=test
content=`git log --oneline -n 10| sed ':label;N;s/\n/\\\n/;b label'`

wget http://192.168.0.202/docs/sugo_package/astro_package_test.sh -O astro_package_test.sh
chmod +x astro_package_test.sh

./astro_package_test.sh $pack_path $PACK_NAME "$content"

if [[ $PACK_NAME = standard ]]; then
    PACKAGE=full
else
    PACKAGE=$PACK_NAME
fi


scp test/sugo-analytics-$PACKAGE.tar.gz root@192.168.0.221:/opt/apps/astro_sugo_qiankun

ssh root@192.168.0.221 "sh /opt/apps/astro_sugo_qiankun/upgrade.sh"





# 2
pack_path=$1
PACK_NAME=$2
#customer=$3
# 打包执行人
#executor=$4
# 更新发布内容
content=`echo $3`

recode_content=""
package_record(){
  #customer_env=$1
  version=$2
  #[[ "$customer_env" == "full" ]] && customer_env=$customer

  echo `pwd`
  svn checkout http://192.168.0.202/svn/sugo/公司内部运维文档/前端发包记录$version --username yunwei  --password 2456 --no-auth-cache
  recode_file="前端发包记录$version/$version.txt"
  local_recode_file="package_record.txt"
  [[ ! -f "$recode_file" ]] && echo "记录文件不存在，请检查!!!"
  #recode_content="发包时间:`date +%Y%m%d_%H%M%S`\n对应环境:$customer_env\n发包人员:$executor\n发包内容:\n$content"
  recode_content="发包时间:`date +%Y%m%d_%H%M%S`\n最近修改内容:\n$content"
  # echo "====="
  # echo "$recode_content"
  # echo "VVVVV"
  echo "$recode_content" >> $recode_file
  echo "$recode_content" >> $local_recode_file
  svn commit -m "$recode_content" 前端发包记录$version --username yunwei  --password 2456 --no-auth-cache
  rm -rf 前端发包记录$version
}



pack_array=(${PACK_NAME//,/ })
for pack in ${pack_array[@]}
do
    echo ">>>>pack:$pack"
    [[ $pack == "standard" ]] && pack=full

    filename="sugo-analytics-${pack}.tar.gz"
    
    filename_tmp=${filename%%.*}
    new_filename=$filename_tmp"-`date +%Y%m%d_%H%M%S`.tar.gz"
    end_dir=${filename_tmp:15}
    
    base_dir='/var/www/html/docs/sugo_package'
    target_ip="192.168.0.202"
    target_dir=$base_dir"/"$end_dir
    
    keep_days=30
    
    ssh root@$target_ip mkdir -p $target_dir
    
    ssh root@$target_ip "find /var/www/html/docs/sugo_package/full -mtime +$keep_days -name 'sugo-analytics-*' -exec rm -rf {} \;"
    
    scp $pack_path/$filename root@$target_ip:$target_dir/$new_filename
    
    package_record $pack $pack_path
    # echo "==recode_content=="
    # echo $recode_content
    # echo "**************"
    # recode_content=`echo $recode_content|tr " " "\n" `
    # recode_content=`echo $recode_content|tr " " ";" `
    # echo $recode_content|tr " " "\n"
    # echo $recode_content|tr " " "="
    # echo $recode_content
    # echo "======================================="
    
    md5_record=`md5sum $pack_path/$filename`
    md5_filename=`echo $md5_record|awk '{print $2}'`
    md5_value=`echo $md5_record|awk '{print $1}'`
    package_58="http://sugoio.com:8202/docs/sugo_package/$end_dir/$new_filename"
    package_202="http://192.168.0.202/docs/sugo_package/$end_dir/$new_filename"
    echo $md5_value
    echo $package_58
    echo $package_202
    # 10月底接口开放加个钉钉机器人
    dd_content=`echo "外网链接:${package_58}\n内网链接:${package_202}\n发布包名:${md5_filename}\n发布包MD5:${md5_value}\n${recode_content}\n"`
    dd_content=`echo $dd_content|sed 's/ /\\\t/g'` 
    echo "=============="
    echo $dd_content
    #curl 'https://oapi.dingtalk.com/robot/send?access_token=acdb4b7a9925c8f324920489594f32d22a749dbc5b61216c7f0e771b4af05af7' \
    curl 'https://oapi.dingtalk.com/robot/send?access_token=9ffedd1ca53be3f3d0f825be264b55f48016b1d9ab54702406fdae7434df1840' \
    -H 'Content-Type: application/json' \
    -d '{"msgtype": "text", 
        "text": {
            "content": "'$dd_content'"
            }
        }'

done 


# 3 
#!/bin/bash


# /opt/apps/astro_sugo_task_manager
word_dir=$(cd $(dirname $0); pwd)
cd $word_dir

\cp -f analytics/config.js bak/

sh ./sugo_astro_stop.sh

tar xzf sugo-analytics-*.tar.gz

rm -rf analytics

mv sugo-analytics/analytics .

rm -rf sugo-analytics

\cp -f bak/config.js analytics/
\cp -f bak/pm2.yaml analytics/
\cp -f bak/pm2.yaml analytics/cmds

sh ./sugo_astro_run.sh
~                         

# 4
#############################################
### 生产模式将本文件放在cmds外层目录（跟app目录同级)
#############################################

#!/bin/bash
cd `dirname $0`

if command -v node > /dev/null 2>&1; then
  NODE=`command -v node`

elif command -v nodejs > /dev/null 2>&1; then
  NODE=`command -v nodejs`

else
  NODE=`command -v ../node/bin/node`
fi

_PM2="$PWD/node_modules/.bin/pm2"
if [ -x $_PM2 ]; then
  _PM2=`command -v ./node_modules/.bin/pm2`
else
  _PM2=`command -v ../node_modules/.bin/pm2`
fi

exec "$NODE" "$_PM2" "$@";
~       