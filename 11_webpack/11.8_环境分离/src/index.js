import { sum } from "./js/math"
const { priceFormat } = require("./js/format")
import "./js/element"
// import { createApp } from "vue"
import { createApp } from "vue/dist/vue.esm-bundler"
import "./js/hot"
if (module.hot) {
	module.hot.accept("./js/hot.js", () => {
		console.log("模块热更新！！！")
	})
}

console.log(sum(1, 2))
console.log(priceFormat())

const app = createApp({
	template: `<h1>{{ msg }}</h1>`,
	data() {
		return {
			msg: "hello world"
		}
	}
})
app.mount("#app")
