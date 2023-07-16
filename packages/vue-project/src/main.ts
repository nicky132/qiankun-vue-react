import { createApp } from "vue";
import { createPinia } from "pinia";
import { registerMicroApps, start } from "qiankun";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

//主应用使用的嵌套路由
router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath;
  if (!window.history.state.back) window.history.state.back = from.fullPath;
  // 手动修改history的state
  return next();
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 注册子应用
registerMicroApps([
  {
    name: "react-app",
    entry: "//localhost:7100",
    container: "#subapp-container",
    activeRule: "/react",
  },
]);

// 启动 qiankun
start();
