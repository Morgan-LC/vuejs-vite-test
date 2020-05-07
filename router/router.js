import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import Counter from '../Views/Counter.vue';
import Players from '../Views/Players.vue';

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
		},
		{
			path: '/players',
			component: Players
		}
	]
})
export default router;