import type { AppRouteModule, AppRouteRecordRaw } from "@/types/router";
import { PageEnum } from "@/enums/pageEnum";
import RouteProcessor from "@/utils/route-processor";

// 导入modules下的所有路由模块
const modules = require.context("./modules", true, /\.ts$/);

// 将路由模块转换成可以渲染的路由对象
const routeProcessor: RouteProcessor = new RouteProcessor(modules);

export const routerModules: AppRouteModule[] =
  routeProcessor.processRouteModules();

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};

export const basicRoutes = [...routerModules, RootRoute];
