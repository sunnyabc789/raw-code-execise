1.产生证书
 生成一个文件名字：v3.ext

 

1
2
3
4
5
6
7
8
9
10
11
12
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
extendedKeyUsage = serverAuth
 
[alt_names]
 
DNS.1 = domain.com
# IP address
IP.1 = 192.168.2.221
IP.2 = 127.0.0.1
　

1
2
3
4
5
6
7
8
＃生成私钥key文件
openssl genrsa 1024 > /path/to/private.pem
 
＃通过私钥文件生成CSR证书签名
openssl req -new -key /path/to/private.pem -out csr.pem
 
＃通过私钥文件和CSR证书签名生成证书文件
openssl x509 -req -days 365 -in csr.pem -signkey private.pem -out file.crt -sha256 -extfile v3.ext