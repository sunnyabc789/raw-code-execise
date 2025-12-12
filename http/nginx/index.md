
cdn缓冲 nginx缓冲 (buffer)
带响应头可以停用
  'X-CDN-Cache': 'MISS', 
  'X-Accel-Buffering': 'no',  # 禁用Nginx缓冲
nginx缓冲 也可以 

缓冲作用
I/O优化，提高传输效率  数据大小到一个buffer包 才会开启 I/O -> 传输

会导致 SSE 的首包响应速度变慢 