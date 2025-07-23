// dep:    "puppeteer-core": "^23.2.0"

// ```
const browser = await newBrowser();

import puppeteer, {
  Browser
} from "puppeteer-core";
let cacheBrowser: Browser | null = null;

export async function initBrowser() {
  if (!cacheBrowser) {
    cacheBrowser = await puppeteer.launch(options);
  }
  return cacheBrowser;
}

export async function newBrowser() {
  return puppeteer.launch(options);
}

const page = await browser.newPage();
await page.setRequestInterception(true);
await page.setCookie({
  name: 'xxSSO',
  value: '',
  domain: ''
}, {
  name: 'xxSSO',
  value: '',
  domain: ''
})

// Listen for network requests
page.on("request", (request) => {
  try {
    // Check if the request was handled
    if (request.isInterceptResolutionHandled()) {
      return;
    }
    const reqUrl = request.url();

    // Intercept specific requests
    // executeList ['/noNeedApi']
    if (executeList.filter((item) => !!reqUrl.includes(item)).length) {
      // 实测这个请求不会走到后端 在前端就拦截掉了
      request.abort();
      return;
    }

    // Check if the request is for JS or CSS and is in the cache
    // getUrlCache return cache[url]
    if (getUrlCache(reqUrl) && request.method() === "GET") {
      // respond(reqUrl)  如下
      // return {
      //   status: 200,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": ContentType,
      //   },
      //   body: getUrlCache(_url),
      // };
      request.respond(respond(reqUrl));
      updateCacheHitTimes(reqUrl);
      return;
    }


    const newUrl = proxyToTargetVersion(reqUrl, keyResourceVersion);
    if (newUrl !== reqUrl) {
      if (getUrlCache(newUrl) && request.method() === "GET") {
        request.respond(respond(newUrl));
        return;
      }
      request.continue({
        url: newUrl
      });
      return;
    }

    // 这个是关键  不执行这个  page.goto会被卡住 以为开了 page.setRequestInterception
    request.continue();
  } catch (e) {
    console.error("Request interception error:");
    console.error(error);
    request.continue();
  }
})

page.on("response", async (response) => {
  const responseUrl = response.url();
  try {
    if (
      response.request().method() === "GET" &&
      !isTargetResource(responseUrl) &&
      !getUrlCache(responseUrl) &&
      (responseUrl.endsWith(".js") || responseUrl.endsWith(".css"))
    ) {
      // cacheUrlBody  cache[url] =  response.text()
      cacheUrlBody(responseUrl, await response.text());
    }
    responses.push(responseUrl);
  } catch (error) {
    console.error("Response interception error:");
    console.error(error);
  }
});

// Navigate the page to a URL.
// 数字下划线 相当于, js能读  数字分隔符  

// let largeNumber = 1_000_000;  // 等价于 1000000
// let hexNumber = 0xFF_FF_FF;    // 等价于 0xFFFFFF
// let binaryNumber = 0b1101_0101; // 等价于 0b11010101

await page.goto(url, {
  timeout: 180_000
});

await page.setViewport({
  width: 1920,
  height: 1080,
  isMobile: false
});

try {
  await page.waitForSelector(pageClassName, {
    timeout: 50_000
  });

} catch (e) {
  await page.reload();
  try {
    await page.waitForSelector(pageClassName, {
      timeout: 50_000
    });
  } catch (e) {
    // 重试大于 1 次时，截图异常页面，并停止继续执行
    if (loadError.loadxxPageTimeoutTimes > 1) {
      // 此处尝试截图异常页面，方便排查，不需要做异常处理
      try {
        await page.screenshot({
          path: screenshotPath
        });
      } catch {}
      // return handleResult(error);
    }

    const msg = `未检测到 xxPage，截图失败; 重试 ${loadError.loadxxPageTimeoutTimes + 1
          } 次;`;
    console.error(`\n${msg}`);
    logError(msg);
    console.log((error).message);
    console.log(errorData);

    loadError.retryTimes++;
    loadError.loadxxPageTimeoutTimes++;
    // 递归
    // return await pageScreenshot(params, { ...extraInfo, loadError });
  }
}

let hasWait = false;
try {
  await page.waitForFunction(
    function () {
      return (
        // 不能包含骨架屏，处理 xx-ui-charts 图表未加载数据的问题
        document.querySelector(".-m-skeleton") === null &&
        // 不能包含加载中的元素，处理表格等组件数据未加载场景
        document.querySelector(".-next-loading-indicator") === null &&
        // 不能包含加载中的元素，处理表格等组件数据未加载场景
        document.querySelector(".-m-loading") === null
      );
    },
    // 经检测确认，基础列表页(513) 存在滚动加载，所以增加时长
    {
      timeout: 10_000
    }
  );
} catch (error) {
  hasWait = true;
  // 存在加载中元素，尝试多等待一段时间
  const msg =
    "等待页面加载完成超时，因为可能自身需要渲染加载元素，需要介入排查确认是否需要";
  console.warn(`\n${msg}，默认忽略该异常`, "\n");
  logError(msg);
  console.log(errorData);
  loadError.waitLoadingElementHiddenFailed = true;
}

  // 等待页面可能存在的动画加载完成；
  !hasWait && (await sleep(2_000));
  await page.screenshot({ path: screenshotPath });

  if (loadError.retryTimes > 0) {
    const msg = `重试截图 ${loadError.retryTimes} 次后截图成功`;
    console.log(`\n${msg}`, "\n");
    console.log(errorData);
    logError(msg);
  }

  if (onlineEnv) {
    await page.close();
  }

  return handleResult();
// ```