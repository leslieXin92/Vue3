<template>
	<!-- <h1>counter: {{ $store.state.counter }}</h1> -->
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
	<h1>counter: {{ counter }}</h1>
</template>

<script>
import { computed } from 'vue'
import { useStore, mapState } from 'vuex'

export default {
	setup() {
		const store = useStore()

		// 嘎嘎牛批的封装方式：把store中的各个状态通过mapState+computed映射到组件中
		const storeStateFn = mapState(['name', 'age', 'counter'])
		const storeState = {}
		Object.keys(storeStateFn).forEach(fnKey => {
			const fn = storeStateFn[fnKey].bind({ $store: store })
			storeState[fnKey] = computed(fn)
		})

		return { ...storeState }
	}
}
</script>
