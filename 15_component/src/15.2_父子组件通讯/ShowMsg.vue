<template>
	<h1>{{ msg }}</h1>
</template>

<script>
export default {
	name: 'ShowMsg',
	// props: ['msg'] // 数组语法
	props: {
		// 对象语法
		msg: {
			type: String,
			required: false,
			default: 'yahoo'
		},
		info: {
			type: Object,
			required: false,
			default: () => {} // 如果是Obj 则default必须为函数（复用问题）
		}
	}
}
</script>

<style lang="scss" scoped></style>
