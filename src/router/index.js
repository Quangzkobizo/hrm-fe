import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import { authGuard } from "./guards/auth";
import Logout from "../components/auth/Logout.vue";
import UserForm from "@/components/form/UserForm.vue";
import EmployeeList from "@/components/employees/EmployeeList.vue";
import AddUser from "@/components/form/AddUser.vue";
import ProjectList from "@/components/project/ProjectList.vue";
import CreateProject from "@/components/project/CreateProject.vue";
import TaskList from "../components/task/TaskList.vue";

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
    path: "/user/update/:id?",
    name: "user.update",
    component: UserForm,
  },
  {
    path: "/users",
    name: "user.index",
    component: EmployeeList,
  },
  {
    path: "/user/create",
    name: "user.create",
    component: AddUser,
  },
  {
    path: "/projects",
    name: "projects.index",
    component: ProjectList,
  },
  {
    path: "/projects/create",
    name: "projects.create",
    component: CreateProject,
  },
  {
    path: "/projects/update/:id?",
    name: "projects.update",
    component: CreateProject,
  },
  {
    path: "/tasks",
    name: "tasks.index",
    component: TaskList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

authGuard(router);

export default router;
