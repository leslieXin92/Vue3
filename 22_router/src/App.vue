<template>
	<router-link to="/home" replace active-class="active"> home </router-link>
	<router-link to="/about" replace active-class="active"> about </router-link>

	<router-view />
</template>

<script>
export default {
	setup() {
		return {}
	}
}
</script>

<style scoped>
.active {
	color: red;
}
</style>
