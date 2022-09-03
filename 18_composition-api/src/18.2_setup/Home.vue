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

	<hr />

	<!-- toRefs  -->
	<h1>toRefsName: {{ toRefsName }}</h1>
	<h1>toRefsAge: {{ toRefsAge }}</h1>
	<button @click="incrementToRefsAge">toRefsAge++</button>

	<hr />

	<!-- toRef  -->
	<h1>toRefName: {{ toRefName }}</h1>
	<h1>toRefAge: {{ toRefAge }}</h1>
	<button @click="incrementToRefAge">toRefAge++</button>

	<hr />

	<!-- customRef -->
	<h1>{{ queryKeyword }}</h1>
	<input type="text" v-model="queryKeyword" />
</template>

<script>
import { reactive, ref, readonly, shallowReactive, toRefs, toRef } from 'vue'
import { useDebouncedRef } from './hook/useDebouncedRef'

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

		// toRefs
		const toRefsInfo = reactive({
			toRefsName: 'cabbage',
			toRefsAge: 23
		})
		let { toRefsName, toRefsAge } = toRefs(toRefsInfo)
		const incrementToRefsAge = () => {
			toRefsAge.value++
		}

		// toRef
		const toRefInfo = reactive({
			toRefName: 'cabbage',
			toRefAge: 23
		})
		const toRefName = toRef(toRefInfo, 'toRefName')
		const toRefAge = toRef(toRefInfo, 'toRefAge')
		const incrementToRefAge = () => {
			toRefAge.value++
		}

		// customRef
		const queryKeyword = useDebouncedRef('queryKeyword')

		return {
			state,
			counter,
			readonlyInfo,
			shallowReactiveInfo,
			toRefsName,
			toRefsAge,
			toRefName,
			toRefAge,
			queryKeyword,
			incrementAge,
			incrementCounter,
			decrementCounter,
			changeReadonlyMsg,
			incrementShallow,
			incrementDeep,
			incrementToRefsAge,
			incrementToRefAge
		}
	}
}
</script>

<style scoped></style>
