<template>
	<!-- <h1>counter: {{ $store.state.counter }}</h1> -->
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
	<h1>counter: {{ counter }}</h1>
	<button @click="increment">counter++</button>
	<button @click="decrement">decrement--</button>
	<button @click="incrementN">counter+10</button>
	<button @click="decrementN">decrement-10</button>
	<h1>gettersName: {{ gettersName }}</h1>
	<h1>gettersAge: {{ gettersAge }}</h1>
	<h1>totalPrice: {{ totalPrice }}</h1>
</template>

<script>
import { useStore, mapMutations } from 'vuex'
import { useState } from '@/hooks/useState'
import { useGetters } from '@/hooks/useGetters'

export default {
	setup() {
		const store = useStore()

		// // 嘎嘎牛批的封装方式：把store中的各个状态通过mapState+computed映射到组件中
		// const storeStateFn = mapState(['name', 'age', 'counter'])
		// const storeState = {}
		// Object.keys(storeStateFn).forEach(fnKey => {
		// 	const fn = storeStateFn[fnKey].bind({ $store: store })
		// 	storeState[fnKey] = computed(fn)
		// })

		// 更牛批的封装：把嘎嘎牛批的方式封装进hook
		const storeState = useState(['name', 'age', 'counter'])

		const storeGetters = useGetters(['totalPrice', 'gettersName', 'gettersAge'])

		const incrementN = () => {
			store.commit('incrementN', 10)
		}
		const decrementN = () => {
			store.commit('decrementN', 10)
		}
		const storeMutations = mapMutations(['increment', 'decrement'])

		return { ...storeState, ...storeGetters, incrementN, decrementN, ...storeMutations }
	}
}
</script>
