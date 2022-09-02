<template>
	<button @click="isShow = !isShow">show / hide</button>

	<!-- 使用钩子时，一般会添加 :css="false" 这个属性来让原本css失效 -->
	<transition
		name="transition"
		mode="out-in"
		appear
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
	>
		<h1 v-if="isShow">hello world</h1>
		<h1 v-else>yahoo!</h1>
	</transition>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			isShow: true
		}
	},
	methods: {
		beforeEnter() {
			console.log('beforeEnter')
		},
		enter() {
			console.log('enter')
		},
		afterEnter() {
			console.log('afterEnter')
		},
		beforeLeave() {
			console.log('beforeLeave')
		},
		leave() {
			console.log('leave')
		},
		afterLeave() {
			console.log('afterLeave')
		}
	}
}
</script>

<style scoped>
.transition-enter-from,
.transition-leave-to {
	opacity: 0;
}

.transition-enter-to,
.transition-leave-from {
	opacity: 1;
}

.transition-enter-active,
.transition-leave-active {
	transition: opacity 0.3s ease;
}
</style>
