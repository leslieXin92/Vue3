<template>
	<h1>name: {{ name }}</h1>
	<h1>age :{{ age }}</h1>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
	setup() {
		const route = useRoute()
		const { name, age } = route.query

		return { name, age }
	}
}
</script>
