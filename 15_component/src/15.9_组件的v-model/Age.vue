<template>
	<input type="text" v-model="name" />
	<input type="number" :value="modelValue" @input="changeAge" />
</template>

<script>
export default {
	name: 'Age',
	props: {
		modelValue: Number,
		modelName: String
	},
	emits: ['update:modelValue', 'update:modelName'],
	computed: {
		name: {
			get() {
				return this.modelName
			},
			set(value) {
				this.$emit('update:modelName', value)
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
