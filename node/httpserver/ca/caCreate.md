方便本地调试需要 https 访问的页面。

生成 RootCA.key

openssl genrsa -des3 -out rootCA.key 2048

生成 RootCA.pem，时间设置长一些 100 年

openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 35600 -out rootCA.pem

生成 SSL 秘钥
openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key

v3.txt，根据实际情况添加域名和 IP

authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
IP.1 = 127.0.0.1
DNS.1 = localhost
DNS.2 = *.taobao.com

生成 SSL 证书，过期时间不能设置太长，浏览器会报不安全

openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.cert -days 700 -sha256 -extfile v3.ext

然后可以拿 server.cert 和 server.key 去配置 https 了
信任根证书 RootCA.pem
