<template>
	<input type="number" :value="modelValue" @input="changeAge" />
</template>

<script>
export default {
	name: 'Age',
	props: {
		modelValue: Number
	},
	emits: ['update:modelValue'],
	methods: {
		changeAge(e) {
			this.$emit('update:modelValue', Number(e.target.value ))
		}
	}
}
</script>

<style scoped></style>
