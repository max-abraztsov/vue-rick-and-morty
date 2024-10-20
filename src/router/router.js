import Main from "@/pages/Main.vue";
import Characters from "@/pages/Characters.vue";
import Application from "@/pages/Application.vue";
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/characters',
        component: Characters,
    },
    {
        path: '/application',
        component: Application,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;