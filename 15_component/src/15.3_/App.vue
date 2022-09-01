<template>
	<home />
</template>

<script>
import Home from '@/15.3_/Home.vue'

export default {
	name: 'App',
	components: { Home },
	provide: {
		name: 'leslie',
		age: 23
	}
}
</script>

<style lang="scss" scoped></style>
