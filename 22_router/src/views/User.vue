<template>
	<!-- <h1>user: {{ $route.params.username }}</h1> -->
	<h1>user: {{ username }}</h1>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
	setup() {
		const route = useRoute()
		const username = route.params.username

		return { username }
	}
}
</script>
