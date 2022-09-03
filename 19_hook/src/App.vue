<template>
	<h1>counter: {{ counter }}</h1>
	<h1>doubleCounter: {{ doubleCounter }}</h1>
	<button @click="increment">increment</button>
	<button @click="decrement">decrement</button>

	<hr />

	<h1>localStorage: {{ data }}</h1>
	<button @click="changeLocalStorage">changeLocalStorage</button>

	<hr />

	<p class="content"></p>
	<div class="info">
		<h1>scroll-X: {{ scrollX }}</h1>
		<h1>scroll-Y: {{ scrollY }}</h1>
		<h1>mouse-X: {{ mouseX }}</h1>
		<h1>mouse-Y: {{ mouseY }}</h1>
	</div>
</template>

<script>
import {
	useCounter,
	useTitle,
	useScrollPosition,
	useMousePosition,
	useLocalStorage
} from './hook/index'

export default {
	name: 'App',
	setup() {
		// counter
		const { counter, doubleCounter, increment, decrement } = useCounter()

		// title
		const titleRef = useTitle('leslie')
		setTimeout(() => {
			titleRef.value = 'cabbage'
		}, 3000)

		// scroll
		const { scrollX, scrollY } = useScrollPosition()

		// mouse
		const { mouseX, mouseY } = useMousePosition()

		// localStorage
		const data = useLocalStorage('randomNumber', '0')
		const changeLocalStorage = () => {
			data.value = Math.random() * 10
		}

		return {
			counter,
			doubleCounter,
			titleRef,
			scrollX,
			scrollY,
			mouseX,
			mouseY,
			data,
			increment,
			decrement,
			changeLocalStorage
		}
	}
}
</script>

<style scoped>
.content {
	width: 3000px;
	height: 6000px;
	border: 1px solid red;
}

.info {
	position: fixed;
	right: 30px;
	bottom: 30px;
}
</style>
