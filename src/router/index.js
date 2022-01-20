import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "../components/Main";
import Task from '../views/Task'
import About from '../views/About'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
    redirect: () => {
      return {
        name: 'Task'
      }
    },
    children: [
      {
        path: "task",
        name: "Task",
        component: Task,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
