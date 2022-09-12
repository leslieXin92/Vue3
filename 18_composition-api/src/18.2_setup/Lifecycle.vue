<template>
	<div>11</div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
	name: 'lifecycle',
	setup() {
		/**
		 * composition api中没有create两个钩子，代码可直接写在setup中
		 * setup 会比 beforeCreate 更早执行，故拿不到this
		 */
		onBeforeMount(() => {
			console.log('onBeforeMount')
		})
		onMounted(() => {
			console.log('onMounted')
		})
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate')
		})
		onUpdated(() => {
			console.log('onUpdated')
		})
		onBeforeUnmount(() => {
			console.log('onBeforeUnmount')
		})
		onUnmounted(() => {
			console.log('onUnmounted')
		})
	}
}
</script>
