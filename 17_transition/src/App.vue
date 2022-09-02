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

	<hr />

	<button @click="addNumber">add number</button>
	<button @click="delNumber">del number</button>
	<transition-group name="transitionGroup" tag="div">
		<h2 v-for="item in numberList" :key="item">
			{{ item }}
		</h2>
	</transition-group>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			isShow: true,
			numberList: [1, 2, 3, 4, 5]
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
		},
		random() {
			return Math.floor(Math.random() * this.numberList.length)
		},
		addNumber() {
			this.numberList.splice(this.random(), 0, this.random())
		},
		delNumber() {
			this.numberList.splice(this.random(), 1)
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

h2 {
	display: inline-block;
	margin: 0 5px;
}

.transitionGroup-enter-from,
.transitionGroup-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.transitionGroup-enter-active,
.transitionGroup-leave-active {
	transition: all 1s ease;
}

.transitionGroup-leave-active {
	position: absolute;
}

.transitionGroup-move {
	transition: transform 1s ease;
}
</style>
