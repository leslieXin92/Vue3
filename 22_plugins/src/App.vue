<template>
	<h1>{{ name }}</h1>
	<h1>{{ age }}</h1>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
	setup() {
		const instance = getCurrentInstance()
		const name = instance.appContext.config.globalProperties.$name
		const age = instance.appContext.config.globalProperties.$age

		return { name, age }
	}
}
</script>
