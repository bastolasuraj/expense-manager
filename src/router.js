import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import EarningsView from './views/EarningsView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/earnings', component: EarningsView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
