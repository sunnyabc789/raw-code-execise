arms包内容解析

function parseReportPayload(payload) {
  if (payload && payload.gokey) {
    const params = payload.gokey.split('&');
    const paramsObject = params.reduce((result, item) => {
      const data = item.split('=');
      return {
        ...result,
        [data[0]]: decodeURIComponent(decodeURIComponent(data[1])),
      };
    }, {});
    // eslint-disable-next-line no-console
    console.log('arms上报参数对象：', paramsObject);
  }
}
arms1.2的包
数据上报上去以后 会按人 按小时groupby 成80分位等 (加权)

cnbp工程中 arms上看到的数据 会是上一次上报的数据 本次上报数据看不到
p1 p2 是 FCP
