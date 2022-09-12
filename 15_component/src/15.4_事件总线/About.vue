<template>
	<h1>name:{{ name }}</h1>
	<h1>age:{{ age }}</h1>
	<button @click="setInfo">click</button>
</template>

<script>
import emitter from './eventbus'

export default {
	name: 'About',
	data() {
		return {
			name: 'leslie',
			age: 23
		}
	},
	methods: {
		setInfo() {
			console.log('click')
			emitter.emit('getInfo', { name: this.name, age: this.age })
			emitter.emit('getLove', { name: 'cabbage', age: 22 })
		}
	}
}
</script>
