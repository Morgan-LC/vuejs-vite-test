import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import Counter from '../Views/Counter.vue';

const routerHistory = createWebHistory()

const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/counter',
			component: Counter
		}
	]
})
export default router;