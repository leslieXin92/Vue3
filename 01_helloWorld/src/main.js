// 不再引入是Vue构造函数，是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// V3
// 创建应用实例对象——app(类似V2中的vm，但app比vm更轻量)
createApp(App).mount('#app')

// V2
// new Vue({
//     render: h => h(app)
// }).$mount('#app')
