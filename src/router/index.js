import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
      children: [
        {
          path: "",
          redirect: { name: "Projects" },
        },
        {
          path: "projects",
          name: "Projects",
          component: () => import("../views/ProjectsView.vue"),
        },
      ],
    },
    {
      path: "/editor",
      name: "EditorLayout",
      component: () => import("../components/Layouts/EditorLayout.vue"),
      children: [
        {
          path: "",
          name: "Editor",
          component: () => import("../views/EditorView.vue"),
        },
      ],
    },
  ],
});

export default router;
