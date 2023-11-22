import type { AppRouteModule } from "@/types/router";

const Login: AppRouteModule = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/login/index.vue"),
};

export default Login;
