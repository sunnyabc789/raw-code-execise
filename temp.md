const { log, warn, error } = console;

// https://mmazzarolo.com/blog/2022-02-14-find-what-javascript-variables-are-leaking-into-the-global-scope/
function getVariablesLeakingIntoGlobalScope() {
  const iframe = window.document.createElement('iframe');

  iframe.src = 'about:blank';

  window.document.body.appendChild(iframe);

  const builtinGlobals = new Set(Object.keys(iframe.contentWindow));

  window.document.body.removeChild(iframe);

  const runtimeGlobals = new Set(Object.keys(window)).difference(
    builtinGlobals
  );

  return [...runtimeGlobals].sort();
}

function npmDownload(
  src,
  { originName, successCallback, errorCallback, beforeInsert }
) {
  const label = '📦';
  log(label, `'${originName}' installing ⏳...`);

  const successTimerLabel = `${label} '${originName}' installed success ✅ costs ⏱️`;
  const failedTimerLabel = `${label} '${originName}' installed failed 😱 costs ⏱️`;

  console.time(successTimerLabel);
  console.time(failedTimerLabel);

  const npmInstallScript = document.createElement('script');

  const id = [
    'tampermonkey-utils-npm-install',
    originName.replaceAll('@', '-').replaceAll('.', '-'),
    Date.now(),
  ].join('-');

  npmInstallScript.setAttribute('id', id);

  npmInstallScript.src = src;

  // npmInstallScript.setAttribute('crossorigin', '');

  npmInstallScript.onload = (resp) => {
    console.timeEnd(successTimerLabel);
    successCallback(resp);
  };

  npmInstallScript.onerror = (error) => {
    console.timeEnd(failedTimerLabel);
    errorCallback(error);
  };

  const append = getSafeAppend();

  beforeInsert();
  append(npmInstallScript);

  try {
    if (!document.querySelector(`#${id}`)) {
      // console.error(new Error('Failed to insert script'))
      throw new Error('Failed to insert script');
    }
  } finally {
    npmInstallScript.remove();
  }
}

/** func passed in should not be bound otherwise the result is always true */
const isNativeCode = (func) => {
  // console.log('func:', func)
  // console.log('func?.toString():', func?.toString())
  return func?.toString().includes('[native code]');
};

/**
 * 更健壮的 `document.body.appendChild`
 * @param {HTMLScriptElement} script
 * @returns {(element: HTMLElement) => void}
 */
function getSafeAppend() {
  // bing.com 会拦截非本 hostname 的 script 标签的插入，我们需要找到一个原生的插入方法
  const candidates = ['appendChild', 'append', 'prepend', 'before', 'after'];

  let nativeOperation = candidates.find((op) =>
    isNativeCode(document.body[op])
  );
  // console.log('nativeOperation:', nativeOperation)

  if (!nativeOperation) {
    warn(
      label,
      'insert method not found in',
      candidates,
      'but the installment is still trying to insert.'
    );

    nativeOperation = candidates[0];
  }

  const insert = document.body[nativeOperation].bind(document.body);

  return insert;
}

async function npmInstallInBrowser(name, { info, beforeInsert }) {
  const label = '📦';

  const originName = name.trim();
  // console.log(originName);

  const { promise, resolve, reject } = Promise.withResolvers();

  const options = {
    originName,
    info,
    successCallback: resolve,
    errorCallback: reject,
    beforeInsert,
  };

  if (/^https?:\/\//.test(originName)) {
    npmDownload(originName, options);
  } else {
    const url = `https://unpkg.com/${originName}`;

    log(label, 'install script', url);

    npmDownload(url, options);
  }

  return promise;
}

/**
 * Install js package in your console.
 * @param {string} name npm package name or github url
 * @param {{ force?: boolean }} info
 * @returns {Promise<boolean>}
 * @example
 * install('lodash')
 * install('lodash@4.17.15')
 *
 */
async function install(name, info = {}) {
  const { force } = info;

  const label = '📦';

  if (name === 'lodash') {
    const _ = window._;

    if (
      typeof _ === 'function' &&
      typeof _.flowRight === 'function' &&
      typeof _.VERSION === 'string'
    ) {
      log(
        label,
        `lodash@${_.VERSION} has been installed already. Enable \`force\` option to reinstall.`
      );

      if (!force) return true;
    }
  }

  if (!name) {
    error(label, 'invalid params: missing package name or url');
    return false;
  }

  // figure out what installed in global scope
  let globalsBefore;
  const beforeInsert = () => {
    globalsBefore = new Set(getVariablesLeakingIntoGlobalScope());
  };

  const success = () => {
    const globalsAfter = new Set(getVariablesLeakingIntoGlobalScope());
    const added = [...globalsAfter.difference(globalsBefore)];
    if (info.force) {
      console.assert(added.length === 0);
    } else {
      added.length !== 1 &&
        warn(label, 'Should be only one global variable installed', added);
    }

    // console.log('added', added)
    added.length &&
      log(label, 'Try input', `\`${added.at(-1)}\``, 'in the console.');
  };

  try {
    await npmInstallInBrowser(name, { info, beforeInsert });
    success();

    return true;
  } catch (err) {
    error(label, err);
    return false;
  }
}

// 绑定到 console 方便使用
console.install = install;


await console.install('lodash');  
