<template></template>

<script>
import emitter from './eventbus'

export default {
	name: 'HomeContent',
	created() {
		emitter.on('getInfo', info => {
			console.log('getInfo', info)
		})
		emitter.on('getLove', info => {
			console.log('getLove', info)
		})
		emitter.on('*', (type, info) => {
			console.log('*', 'type', type, 'info', info)
		})
	},
	beforeUnmount() {
		emitter.all.clear()
	}
}
</script>

<style lang="scss" scoped></style>
