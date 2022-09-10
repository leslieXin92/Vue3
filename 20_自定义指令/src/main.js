import { createApp } from 'vue'
// import App from './20.1_默认实现方式.vue'
import App from './20.2_自定义指令.vue'

const app = createApp(App)

// 全局自定义指令
app.directive('focus', {
	mounted(el, bindings, vnode, prevnode) {
		console.log('全局自定义指令 - focus - mounted')
	}
})

app.mount('#app')
