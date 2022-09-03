<template>
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
</template>

<script>
export default {
	name: 'Home',
	props: {
		name: String
	},
	setup(props, { attrs, emit, slots }) {
		console.log('props', props) // 传过来的参数，并props中声明了
		console.log('attrs', attrs) // 传过来的参数，但未在props中声明
		console.log('emit', emit) // 传过来的自定义事件
		console.log('slots', slots) // 插槽

		let age = 23
		const incrementAge = () => {
			age++
		}

		return { age, incrementAge }
	}
}
</script>

<style scoped></style>
