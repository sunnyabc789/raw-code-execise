
 if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(function (estimate) {
        // 数字要确认下
      if (estimate.quota < 980000000) {
        // console.log('无痕模式');
        setMode('no-trace')
      } else {
        // console.log('非无痕模式');
      }
    });
  } else {
    window.webkitStorageInfo && window.webkitStorageInfo.queryUsageAndQuota(webkitStorageInfo.TEMPORARY,
      function (used, remaining) {
         // 数字要确认下
        if (remaining < 980000000) {
          // console.log('无痕模式1');
          setMode('no-trace')
        } else {
          // console.log('非无痕模式1');
        }
      }, function (e) {
        console.log('Error1', e);
      }
    );
    if (!window.webkitStorageInfo) {
      console.log('无法检测是否无痕模式')
    }
  }