<template>
	<h1>category</h1>
	<h1 @click="counter++">{{ counter }}</h1>
</template>

<script>
export default {
	name: 'Category',
	data() {
		return {
			counter: 0
		}
	}
}
</script>

<style scoped>
h1 {
	cursor: pointer;
}
</style>
