import type { AppRouteModule } from "@/types/router";

const Home: AppRouteModule = {
  path: "/home",
  name: "Home",
  component: () => import("@/views/home/index.vue"),
};

export default Home;
