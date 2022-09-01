<template>
	<home />
	<button @click="age++">age++</button>
</template>

<script>
import Home from '@/15.3_Provide和Inject/Home.vue'
import { computed } from 'vue'

export default {
	name: 'App',
	components: { Home },
	provide() {
		return {
			name: this.name, // 非响应式
			age: computed(() => this.age) // 响应式
		}
	},
	data() {
		return {
			name: 'leslie',
			age: 23
		}
	}
}
</script>

<style lang="scss" scoped></style>
