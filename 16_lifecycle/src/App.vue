<template>
	<home v-if="showHome" />
	<button @click="showHome = !showHome">unmount Home</button>
</template>

<script>
import Home from './Home.vue'

export default {
	name: 'App',
	components: { Home },
	data() {
		return {
			showHome: true
		}
	}
}
</script>

<style scoped></style>
