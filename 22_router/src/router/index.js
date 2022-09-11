import {
	createRouter,
	createWebHashHistory,
	createWebHistory
} from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import(/* webpackChunkName: 'home-chunk' */'@/views/Home.vue')
	},
	{
		path: '/about',
		component: () => import(/* webpackChunkName: 'about-chunk' */'@/views/About.vue')
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router
