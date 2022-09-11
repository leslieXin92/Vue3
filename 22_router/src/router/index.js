import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import(/* webpackChunkName: 'home-chunk' */ '@/views/Home.vue')
	},
	{
		path: '/about',
		name: '/about',
		component: () => import(/* webpackChunkName: 'about-chunk' */ '@/views/About.vue'),
		mate: {
			name: 'leslie',
			age: 24
		},
		children: [
			{
				path: 'name',
				component: () => import('@/views/Name.vue')
			},
			{
				path: 'age',
				component: () => import('@/views/Age.vue')
			}
		]
	},
	{
		path: '/user/:username',
		name: '/user',
		component: () => import('@/views/User.vue')
	},
	{
		path: '/lover',
		component: () => import('@/views/Lover.vue')
	},
	{
		path: '/:pathMatch(.*)',
		component: () => import('@/views/NotFound')
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router
