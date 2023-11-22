import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { basicRoutes } from "./routers/index";

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, form, next) => {
  // 示例：假设你有一个存储用户登录状态的变量 isUserLoggedIn
  const isUserLoggedIn = false; // 根据实际逻辑获取登录状态

  if (!isUserLoggedIn) {
    // 如果用户未登录，并且当前不在登录页面，跳转到登录页面
    if (to.path !== "/login") {
      next("/login"); // '/login' 是你的登录页面路径，根据实际路径修改
    } else {
      // 如果当前已经在登录页面，继续导航
      next();
    }
  } else {
    // 如果用户已登录，继续导航
    next();
  }
});

export default router;
