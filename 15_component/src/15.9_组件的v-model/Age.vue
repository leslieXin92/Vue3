<template>
	<input type="number" :value="modelValue" @input="changeAge" />
	<input type="number" v-model="age" />
</template>

<script>
export default {
	name: 'Age',
	props: {
		modelValue: Number
	},
	emits: ['update:modelValue'],
	computed: {
		age: {
			get() {
				return this.modelValue
			},
			set(value) {
				this.$emit('update:modelValue', value)
			}
		}
	},
	methods: {
		changeAge(e) {
			this.$emit('update:modelValue', Number(e.target.value))
		}
	}
}
</script>

<style scoped></style>
