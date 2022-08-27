import { RouteRecordRaw , createRouter, createWebHistory} from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/tasks",
        name: "welcome"
    },
    {
        path: "/tasks",
        name: "tasks",
        component: () => import("@/components/TaskList.vue")
    },
    {
        path: "/task/new",
        name: "tasks-new",
        component: () => import("@/components/TaskForm.vue")
    },
    {
        path: "/tasks/:id",
        name: "tasks-details",
        component: () => import("@/components/TaskDetail.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;