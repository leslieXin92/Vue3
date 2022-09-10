<template>
	<input type="text" ref="input" />
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
	setup() {
		const input = ref(null)
		onMounted(() => {
			input.value.focus()
		})
		return { input }
	}
}
</script>

<style scoped></style>
