import { createApp } from 'vue'
// import App from './20.1_默认实现方式.vue'
// import App from './20.2_自定义指令.vue'
import App from './20.3_timeFormat案例.vue'

import registerDirectives from './directives'

const app = createApp(App)

registerDirectives(app)

app.mount('#app')
