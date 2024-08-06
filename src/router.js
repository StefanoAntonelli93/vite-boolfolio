import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProject from "./pages/AppProject.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHome,
    },
    {
      path: "/project",
      name: "Project",
      component: AppProject,
    },
    {
      path: "/project/:slug",
      name: "Details",
      component: ProjectDetail,
    },
  ],
});

export { router };
