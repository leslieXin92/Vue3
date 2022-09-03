<template>
	<h1>name: {{ info.name }}</h1>
	<h1>age: {{ info.age }}</h1>
	<button @click="changeName">changeName</button>
	<button @click="incrementAge">incrementAge</button>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
	name: 'Watch',
	setup() {
		const info = reactive({
			name: 'leslie',
			age: 24
		})

		const changeName = () => {}
		const incrementAge = () => {
			info.age++
		}

		// 1、监听reactive，返回的newValue和oldValue都是reactive对象
		// watch(info, (newValue, oldValue) => {
		// 	console.log('newInfo', newValue)
		// 	console.log('oldInfo', oldValue)
		// })

		// 2、监听reactive各个/单个属性，返回的newValue和oldValue都是普通对象
		watch(
			// () => info.age,
			() => ({ ...info }),
			(newValue, oldValue) => {
				console.log('newValue', newValue)
				console.log('oldValue', oldValue)
			}
		)

		return {
			info,
			changeName,
			incrementAge
		}
	}
}
</script>

<style scoped></style>
