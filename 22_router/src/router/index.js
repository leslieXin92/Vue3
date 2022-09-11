import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import(/* webpackChunkName: 'home-chunk' */ '@/views/Home.vue'),
		mate: {
			name: 'leslie',
			age: 24
		}
	},
	{
		path: '/about',
		name: '/about',
		component: () => import(/* webpackChunkName: 'about-chunk' */ '@/views/About.vue')
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router
