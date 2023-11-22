/*
 * @Description: router模块处理类
 */

import type { AppRouteModule, AppRouteRecordRaw } from "@/types/router";

class RouteProcessor {
  private routerModules: __WebpackModuleApi.RequireContext;

  constructor(routerModules: __WebpackModuleApi.RequireContext) {
    this.routerModules = routerModules;
  }

  /**
   * @description: 处理传入的modules为标准router
   */
  public processRouteModules(): AppRouteRecordRaw[] {
    const modules = this.routerModules;
    const routeModuleList: AppRouteModule[] = [];

    modules.keys().forEach((key) => {
      const mod = modules(key)?.default;
      const modList = Array.isArray(mod) ? [...mod] : [mod];
      routeModuleList.push(...modList);
    });

    return routeModuleList;
  }
}

export default RouteProcessor;
