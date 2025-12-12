async function readAllDataFromIndexedDB() {
      const dbName = 'gsdp-bot-progress-db-v1-ARWAydzmxAv';
      const storeName = 'progress-store-ARWAydzmxAv';

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onsuccess = function (event) {
            const db = event.target.result;

            const transaction = db.transaction(storeName, 'readonly');
            const store = transaction.objectStore(storeName);

            const allData = [];
            const cursorRequest = store.openCursor(); // 打开游标

            cursorRequest.onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    allData.push(cursor.value); // 将当前记录加入数组
                    cursor.continue(); // 移动到下一条记录
                } else {
                    console.log('已读取所有数据:', allData);
                    db.close();
                    resolve(allData); // 返回完整数据集合
                }
            };

            cursorRequest.onerror = function (event) {
                console.error('读取失败:', event.target.error);
                reject(event.target.error);
            };
        };

        request.onerror = function (event) {
            console.error('打开数据库失败:', event.target.error);
            reject(event.target.error);
        };
    });
}

// 示例：读取所有数据
readAllDataFromIndexedDB()
    .then(data => console.log('所有数据:', data))
    .catch(err => console.error('读取失败:', err));



// 写入数据的脚本
async function writeDataToIndexedDB(key, value) {
    const dbName = 'MyDatabase'; // 数据库名称
    const storeName = 'MyStore'; // 对象仓库名称

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1); // 打开数据库（版本 1）

        // 创建对象仓库（如果数据库不存在）
        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id' }); // 定义主键
            }
        };

        request.onsuccess = function(event) {
            const db = event.target.result;

            const transaction = db.transaction(storeName, 'readwrite'); // 开启事务
            const store = transaction.objectStore(storeName);

            // 写入数据（以 key-value 格式存储）
            const data = { id: key, ...value };
            const addRequest = store.add(data);

            addRequest.onsuccess = () => {
                console.log(`数据已写入: ${key} => ${value}`);
                db.close();
                resolve(true);
            };

            addRequest.onerror = function(event) {
                console.error('写入失败:', event.target.error);
                reject(event.target.error);
            };
        };

        request.onerror = function(event) {
            console.error('打开数据库失败:', event.target.error);
            reject(event.target.error);
        };
    });
}

// 示例：写入数据
writeDataToIndexedDB('user1', { name: 'Alice', age: 30 })
    .then(() => console.log('写入成功'))
    .catch(err => console.error('写入失败:', err));
