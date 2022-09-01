<template>
	<h1 @click="pageClick">category</h1>
</template>

<script>
export default {
	name: 'Category',
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
