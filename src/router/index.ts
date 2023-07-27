import { createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/login", component: () => import("../views/loginComponent.vue")},
        {path: "/chess", component: () => import("../views/chessBoard.vue")},
    ],
});

export default router;