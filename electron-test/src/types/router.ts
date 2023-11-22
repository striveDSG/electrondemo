import { defineComponent } from "vue";
import type { RouteRecordRaw, RouteMeta } from "vue-router";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

interface MyRouteMeta extends RouteMeta {
  title?: string;
  icon?: string;
}

// @ts-expect-error
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string;
  icon?: string;
  meta?: MyRouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
  isMenu?: boolean;
}

export interface MenuItem {
  name: string;
  icon?: string;
  url: string;
  childMenus: MenuItem[];
}

export type AppRouteModule = AppRouteRecordRaw;
