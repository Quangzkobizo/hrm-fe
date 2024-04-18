import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import { authGuard } from "./guards/auth";
import Logout from "../components/auth/Logout.vue";
import InfoForm from "@/components/form/InfoForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/auth/LoginForm.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/user/update",
    name: "user.update",
    component: InfoForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

authGuard(router);

export default router;
