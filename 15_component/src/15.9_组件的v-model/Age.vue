<template>
	<input type="number" v-model.number="modelValue" @input="changeAge" />
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
			this.$emit('update:modelValue', this.modelValue)
		}
	}
}
</script>

<style scoped></style>
