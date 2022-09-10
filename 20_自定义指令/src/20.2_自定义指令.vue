<template>
	<input type="text" v-focus />
	<h1>counter: {{ counter }}</h1>
	<button @click="counter++" v-yahoo>counter++</button>
</template>

<script>
import { ref } from 'vue'

export default {
	// 局部自定义指令
	directives: {
		yahoo: {
			created() {
				console.log('局部自定义指令 - yahoo - created')
			},
			beforeMount() {
				console.log('局部自定义指令 - yahoo - beforeMount')
			},
			mounted(el, bindings, vnode, preVnode) {
				console.log('局部自定义指令 - yahoo - mounted')
			},
			beforeUpdate() {
				console.log('局部自定义指令 - yahoo - beforeUpdate')
			},
			updated() {
				console.log('局部自定义指令 - yahoo - updated')
			},
			beforeUnmount() {
				console.log('局部自定义指令 - yahoo - beforeUnmount')
			},
			unmounted() {
				console.log('局部自定义指令 - yahoo - unmounted')
			}
		}
	},
	setup() {
		const counter = ref(0)
		return { counter }
	}
}
</script>
