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

// 动态添加路由
const asyncRoutes = {
	path: '/category',
	component: () => import('@/views/Category.vue')
}
router.addRoute(asyncRoutes)

// 导航守卫
let counter = 0
router.beforeEach((to, from) => {
	// to: 即将跳转到的route对象
	// from: 从哪个路由对象跳转的
	// 返回值: false-不进行导航; undefined-默认导航; string-跳转string; 对象-跳转route对象
	console.log(`跳转了 ${++counter} 次`)
})

export default router
