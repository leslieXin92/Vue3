<template>
	<show-msg :msg="msg" />
	<h1>{{ counter }}</h1>
	<counter @add="addOne" @sub="subOne" @addN="addN" @subN="subN" />
</template>

<script>
import ShowMsg from './ShowMsg.vue'
import Counter from './Counter.vue'

export default {
	components: { ShowMsg, Counter },
	data() {
		return {
			msg: 'hello world',
			counter: 10
		}
	},
	methods: {
		addOne() {
			this.counter++
		},
		subOne() {
			this.counter--
		},
		addN(n) {
			this.counter += n
		},
		subN(n) {
			this.counter -= n
		}
	}
}
</script>

<style lang="scss" scoped></style>
