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
			component: Home,
			meta: { title: 'Home' }
		},
		{
			path: '/counter',
			component: Counter,
			meta: { title: 'Counter' }
		},
		{
			path: '/players',
			component: Players,
			meta: { title: 'NBA Player' }
		}
	]
})
export default router;