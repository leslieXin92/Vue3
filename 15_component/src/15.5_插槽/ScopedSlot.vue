<template>
	<h1>作用域插槽开始</h1>

	<template v-for="(value, key) in info" :key="key">
		<slot :itemKey="key" :itemValue="value">{{ key }} : {{ value }}</slot>
	</template>

	<h1>作用域插槽结束</h1>
</template>

<script>
export default {
	props: {
		info: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="scss" scoped></style>
