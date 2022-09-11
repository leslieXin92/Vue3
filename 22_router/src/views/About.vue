<template>
	<h1>about</h1>

	<router-link to="/about/name"> name </router-link>
	<router-link to="/about/age"> age </router-link>

	<router-view></router-view>
</template>

<script>
export default {
	name: 'about'
}
</script>
