import {
	createRouter,
	createWebHashHistory,
	createWebHistory
} from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/about',
		component: About
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router
