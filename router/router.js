import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Counter from '../views/Counter.vue';
import Players from '../views/Players.vue';

const routerHistory = createWebHistory()

export const router = createRouter({
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