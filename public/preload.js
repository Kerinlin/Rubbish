utools.onPluginReady(() => {
  console.log("插件初始化完成 preload.js");
  utools.onPluginEnter(({ code, type, payload }) => {
    console.log("用户进入插件 reload.js", code, type, payload);
  });
});
