<template>
	<router-link to="/home" replace active-class="active"> home </router-link>
	<router-link to="/about" replace active-class="active"> about </router-link>
	<router-link :to="`/user/${username}`" replace active-class="active"> user </router-link>

	<router-view />
</template>

<script>
export default {
	setup() {
		const username = 'leslie'
		return { username }
	}
}
</script>

<style scoped>
.active {
	color: red;
}
</style>
