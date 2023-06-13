1.json处理差异
原始数据
{"key1": "v1\nv2"}
stringify给前端的时候 \n不会被转义为 \\n  
导致前端json.parse出错  
其实有经验的前端都会把json.parse try catch住 