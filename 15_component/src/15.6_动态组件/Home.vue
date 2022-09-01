<template>
	<h1 @click="pageClick">home</h1>
</template>

<script>
export default {
	name: 'home',
	props: {
		currentTab: {
			type: String,
			default: 'home'
		}
	},
	emits: ['pageClick'],
	methods: {
		pageClick() {
			this.$emit('pageClick', this.currentTab)
		}
	}
}
</script>

<style scoped>
h1 {
	cursor: pointer;
}
</style>
