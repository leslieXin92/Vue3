<template>
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
	<button @click="age++">age++</button>
</template>

<script>
export default {
	name: 'Home',
	beforeCreate() {
		console.log('---- beforeCreate')
	},
	created() {
		console.log('---- created')
	},
	beforeMount() {
		console.log('---- beforeMount')
	},
	mounted() {
		console.log('---- mounted')
	},
	beforeUpdate() {
		console.log('---- beforeUpdate')
	},
	updated() {
		console.log('---- updated')
	},
	beforeUnmount() {
		console.log('---- beforeUnmount')
	},
	unmounted() {
		console.log('---- unmounted')
	},
	data() {
		return {
			name: 'leslie',
			age: 24
		}
	}
}
</script>

<style scoped></style>
