<template>
	<!-- reactive -->
	<h1>name: {{ name }}</h1>
	<h1>age: {{ state.age }}</h1>
	<button @click="incrementAge">age++</button>

	<hr />

	<!-- ref -->
	<h1>counter: {{ counter }}</h1>
	<button @click="incrementCounter">counter++</button>
	<button @click="decrementCounter">counter--</button>

	<hr />

	<!-- readonly -->
	<h1>readonlyMsg: {{ readonlyInfo.readonlyMsg }}</h1>
	<button @click="changeReadonlyMsg">change readonlyMsg</button>

	<hr />

	<!-- shallowReactive -->
	<h1>shallowReactiveInfo: {{ shallowReactiveInfo }}</h1>
	<button @click="incrementShallow">incrementShallow</button>
	<button @click="incrementDeep">incrementDeep</button>
</template>

<script>
import { reactive, ref, readonly, shallowReactive } from 'vue'

export default {
	name: 'Home',
	props: {
		name: String
		// msg: String
	},
	setup(props, { attrs, emit, slots }) {
		console.log('props', props) // 传过来的参数，并props中声明了
		console.log('attrs', attrs) // 传过来的参数，但未在props中声明
		console.log('emit', emit) // 传过来的自定义事件
		console.log('slots', slots) // 插槽

		// reactive
		const state = reactive({
			age: 23
		})
		const incrementAge = () => {
			state.age++
		}

		// ref
		const counter = ref(100)
		const incrementCounter = () => {
			counter.value++
		}
		const decrementCounter = () => {
			counter.value--
		}

		// readonly
		const readonlyInfo = readonly({ readonlyMsg: 'hello world' })
		const changeReadonlyMsg = () => {
			readonlyInfo.readonlyMsg += '!'
		}

		// shallowReactive
		const shallowReactiveInfo = shallowReactive({
			shallow: 1,
			deep: {
				num: 1
			}
		})
		const incrementShallow = () => {
			shallowReactiveInfo.shallow++
		}
		const incrementDeep = () => {
			shallowReactiveInfo.deep.num++
		}

		return {
			state,
			counter,
			readonlyInfo,
			shallowReactiveInfo,
			incrementAge,
			incrementCounter,
			decrementCounter,
			changeReadonlyMsg,
			incrementShallow,
			incrementDeep
		}
	}
}
</script>

<style scoped></style>
