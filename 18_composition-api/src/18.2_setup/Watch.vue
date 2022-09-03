<template>
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
	<button @click="changeName">changeName</button>
	<button @click="incrementAge">incrementAge</button>
</template>

<script>
import { ref, watchEffect, watch } from 'vue'

export default {
	name: 'Watch',
	setup() {
		const name = ref('leslie')
		const age = ref(24)
		const changeName = () => (name.value += '!')
		const incrementAge = () => age.value++

		// watchEffect：自动收集依赖 并 立即调用
		watchEffect(() => {
			console.log('name', name.value)
			console.log('age', age.value)
		})

		return {
			name,
			age,
			changeName,
			incrementAge
		}
	}
}
</script>

<style scoped></style>
