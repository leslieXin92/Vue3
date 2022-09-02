<template>
	<!-- <age :modelValue="age" @update:model-value="age = $event" /> -->
	<h1>age: {{ age }}</h1>
	<age v-model="age" />
</template>

<script>
import Age from './Age.vue'

export default {
	name: 'App',
	components: { Age },
	data() {
		return {
			age: 24
		}
	}
}
</script>

<style scoped></style>
