<template>
	<!-- <age :modelValue="age" @update:model-value="age = $event" /> -->
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
	<age v-model="age" v-model:modelName="name" />
</template>

<script>
import Age from './Age.vue'

export default {
	name: 'App',
	components: { Age },
	data() {
		return {
			name: 'leslie',
			age: 24
		}
	}
}
</script>

<style scoped></style>
