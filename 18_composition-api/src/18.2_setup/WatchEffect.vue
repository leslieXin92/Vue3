<template>
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
	<h1 ref="yahooRef">yahoo</h1>
	<button @click="changeName">changeName</button>
	<button @click="incrementAge">incrementAge</button>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
	name: 'WatchEffect',
	setup() {
		const name = ref('leslie')
		const age = ref(24)
		const changeName = () => {
			name.value += '!'
		}
		const incrementAge = () => {
			age.value++
			if (age.value > 30) stopAgeWatchEffect()
		}

		// watchEffect：自动收集依赖 并 立即调用
		watchEffect(
			// onInvalidate 为 watchEffect清除副作用
			onInvalidate => {
				const timer = setTimeout(() => {
					console.log('请求成功')
				}, 2000)
				// 根据监听对象(name)发请求
				onInvalidate(() => {
					// 清除额外的副作用
					clearTimeout(timer)
					console.log('上次请求取消，开始下次请求')
				})
				console.log('name变了', name.value)
			},
			{
				flush: 'post'
			}
		)

		// watchEffect停止侦听
		const stopAgeWatchEffect = watchEffect(() => {
			console.log('age变了', age.value)
		})

		// watchEffect触发时机
		const yahooRef = ref(null)
		watchEffect(
			() => {
				console.log('yahooRef', yahooRef.value)
			},
			{
				flush: 'post' // dom构建后再监听
			}
		)

		return {
			name,
			age,
			yahooRef,
			changeName,
			incrementAge
		}
	}
}
</script>

<style scoped></style>
