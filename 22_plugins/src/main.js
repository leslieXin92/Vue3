import { createApp } from 'vue'
import App from './App.vue'

import pluginObject from './plugins/plugin_object'
import plugin_function from './plugins/plugin_function'

const app = createApp(App)

app.use(pluginObject)
app.use(plugin_function)

app.mount('#app')
