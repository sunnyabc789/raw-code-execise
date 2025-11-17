#!/bin/bash

# 设置源目录和目标目录
SOURCE_DIR="packages"
TARGET_DIR="test"

# 检查源目录是否存在
if [ ! -d "$SOURCE_DIR" ]; then
    echo "错误: 源目录 $SOURCE_DIR 不存在"
    exit 1
fi

# 创建目标目录（如果不存在）
if [ ! -d "$TARGET_DIR" ]; then
    echo "创建目标目录: $TARGET_DIR"
    mkdir -p "$TARGET_DIR"
fi

# 遍历packages目录下的所有子目录
for package_dir in "$SOURCE_DIR"/*; do
    # 检查是否为目录
    if [ -d "$package_dir" ]; then
        # 获取包名（目录名）
        package_name=$(basename "$package_dir")
        
        # 检查dist目录是否存在
        if [ -d "$package_dir/dist" ]; then
            echo "拷贝 $package_dir/dist 到 $TARGET_DIR/$package_name/dist"
            
            # 创建目标包目录
            mkdir -p "$TARGET_DIR/$package_name"
            
            # 拷贝dist目录
            cp -r "$package_dir/dist" "$TARGET_DIR/$package_name/"
            
            echo "✓ 完成拷贝: $package_name"
        else
            echo "⚠ 跳过 $package_name: dist目录不存在"
        fi
    fi
done

echo "所有拷贝操作完成！"

# 删除新目录下所有.md结尾的文件
echo "正在删除 $TARGET_DIR 目录下的所有 .md 文件..."
find "$TARGET_DIR" -name "*.md" -type f -delete
echo "✓ 已删除所有 .md 文件"
