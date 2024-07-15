String.prototype.isWellFormed、String.prototype.toWellFormed


JavaScript 中的字符串是UTF-16编码的。UTF-16编码中有代理对的概念，这一概念在UTF-16字符、Unicode 码位和字素簇部分有详细介绍。

isWellFormed
isWellFormed()让你能够测试一个字符串是否是格式正确的（即不包含单独代理项）。
由于引擎能够直接访问字符串的内部表示，与自定义实现相比 isWellFormed() 更高效。
如果你需要将字符串转换为格式正确的字符串，可以使用 toWellFormed()方法。isWellFormed()让你可以对格式正确和格式错误的字符串进行不同的处理，
比如抛出一个错误或将其标记为无效。

如果传递的字符串格式不正确，encodeURI会抛出错误。
可以通过使用isWellFormed()在将字符串传递给 encodeURI() 之前测试字符串来避免这种情况。

toWellFormed()迭代字符串的码元，并将任何单独代理项替换为Unicode替换字符U+FFFD。
这确保了返回的字符串格式正确并可用于期望正确格式字符串的函数，比如encodeURI。
由于引擎能够直接访问字符串的内部表示，与自定义实现相比toWellFormed()更高效。

当在某些上下文中使用格式不正确的字符串时，例如TextEncoder，它们会自动转换为使用相同替换字符的格式正确的字符串。
当单独代理项被呈现时，它们也会呈现为替换字符（一个带有问号的钻石形状）。

如果传递的字符串格式不正确，encodeURI会抛出错误。可以先通过使用toWellFormed()将字符串转换为格式正确的字符串来避免这种情况。