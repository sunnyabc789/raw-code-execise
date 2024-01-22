const data = [
    { id: 1, name: "张三", age: 10 },
    { id: 2, name: "张珊", age: 10 },
    { id: 3, name: "李四", age: 10 },
  ];

  // 展示名称
  const headerReplace = { id: "ID", name: "名称", age: "年龄" };

  // 数据源
  const sheet = [headerReplace, ...data];

  // 创建一个sheet表格   使用json_to_sheet, 数据格式比较为  数组包对象, 不然会报错
  const worksheet = XLSX.utils.json_to_sheet(sheet, {
    // 这里可以通过设置header, 来对导出数据 列 顺序的排序
    // 实测可以只写一部分, 也可以整体排序
    // ["id", "name", "age"] 相当于把上面整个表头给限制顺序了
    header: ["age"],
    // 跳过 Header, 就是把原来表格数据的表头去掉了, headerReplace渲染的数据 "冒充" 表头了
    skipHeader: true,
  });

  // 简单理解为在内存中 创建一个xlsx 文件
  const newWorkBook = XLSX.utils.book_new();
  // 把worksheet添加到workbook中
  XLSX.utils.book_append_sheet(newWorkBook, worksheet, "SheetJS");
  // 写入文件, CHROME浏览器会直接下载, 后面的是文件名称和后缀
  XLSX.writeFile(newWorkBook, "订单.xlsx");





// 读取
const XLSX = require('xlsx');
const workbook = XLSX.readFile('file.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
console.log(jsonData);