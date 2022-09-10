<template>
	<teleport to="#yahoo">
		<h1>counter: {{ counter }}</h1>
		<button @click="counter++">counter++</button>
	</teleport>
</template>

<script>
import { ref } from 'vue'
export default {
	setup() {
		const counter = ref(0)
		return { counter }
	}
}
</script>
