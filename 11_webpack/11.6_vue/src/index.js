import { sum } from "./js/math"
const { priceFormat } = require("./js/format")
import "./js/element"
// import { createApp } from "vue"
import { createApp } from "vue/dist/vue.esm-bundler"

console.log(sum(1, 2))
console.log(priceFormat())

const app = createApp({
  template: `<h1>{{ msg }}</h1>`,
  data() {
    return {
      msg:'hello world'
    }
  }
})
app.mount('#app')
