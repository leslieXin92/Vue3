<template>
	<h1>fullName: {{ fullName }}</h1>
	<input type="text" v-model="firstName" />
	<input type="text" v-model="lastName" />
</template>

<script>
import { ref, computed } from 'vue'

export default {
	name: 'Computed',
	setup() {
		const firstName = ref('leslie')
		const lastName = ref('cabbage')

		// computed返回值是computedRef对象，也是响应式的

		// 用法一：只传入get
		// const fullName = computed(() => `${firstName.value} - ${lastName.value}`)

		// 用法二：传入一个对象，包含setter和getter
		const fullName = computed({
			get() {
				return `${firstName.value} - ${lastName.value}`
			},
			set(newValue) {
				const name = newValue.split('-')
				firstName.value = name[0]
				lastName.value = name[1]
			}
		})

		return {
			firstName,
			lastName,
			fullName
		}
	}
}
</script>

<style scoped></style>
