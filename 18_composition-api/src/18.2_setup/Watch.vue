<template>
	<h1>boyName: {{ boyInfo.name }}</h1>
	<h1>boyAge: {{ boyInfo.age }}</h1>
	<h1>boyLover: {{ boyInfo.lover }}</h1>
	<h1>girlName: {{ girlName }}</h1>
	<h1>girlAge: {{ girlAge }}</h1>
	<button @click="changeName">changeName</button>
	<button @click="incrementAge">incrementAge</button>
	<button @click="changeBoyLoverAge">changeBoyLoverAge</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'

export default {
	name: 'Watch',
	setup() {
		const boyInfo = reactive({
			name: 'leslie',
			age: 24,
			lover: {
				name: 'cabbage',
				age: 23
			}
		})
		const girlName = ref('cabbage')
		const girlAge = ref(23)

		const changeName = () => {
			boyInfo.name += '!'
			girlName.value += '!'
		}
		const incrementAge = () => {
			boyInfo.age++
			girlAge.value++
		}
		const changeBoyLoverAge = () => {
			boyInfo.lover.age++
		}

		// 1、监听reactive，返回的newValue和oldValue都是reactive对象
		watch(boyInfo, (newValue, oldValue) => {
			console.log('newInfo', newValue)
			console.log('oldInfo', oldValue)
		})

		// 2、监听reactive的各个/单个属性，返回的newValue和oldValue都是普通对象
		watch(
			// () => ({ ...boyInfo }),
			() => boyInfo.lover,
			(newValue, oldValue) => {
				console.log('newValue', newValue)
				console.log('oldValue', oldValue)
			},
			{
				deep: true,
				immediate: true
			}
		)

		// 3、监听多个数据源
		watch([girlName, girlAge], ([newName, newAge], [oldName, oldAge]) => {
			console.log(`${oldName} => ${newName}`)
			console.log(`${oldAge} => ${newAge}`)
		})

		return {
			boyInfo,
			girlName,
			girlAge,
			changeName,
			incrementAge,
			changeBoyLoverAge
		}
	}
}
</script>

<style scoped></style>
