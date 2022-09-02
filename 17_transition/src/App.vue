<template>
	<button @click="isShow = !isShow">show / hide</button>

	<transition name="transition">
		<h1 v-if="isShow">hello world</h1>
	</transition>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			isShow: true
		}
	}
}
</script>

<style scoped>
.transition-enter-from,
.transition-leave-to {
	opacity: 0;
}

.transition-enter-to,
.transition-leave-from {
	opacity: 1;
}

.transition-enter-active,
.transition-leave-active {
	transition: opacity 0.3s ease;
}
</style>
