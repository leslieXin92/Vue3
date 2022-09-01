<template>
	<home />
	<about />
</template>

<script>
import Home from '@/15.4_事件总线/Home.vue'
import About from '@/15.4_事件总线/About.vue'

export default {
	name: 'App',
	components: { Home, About },
	data() {
		return {
			name: 'leslie',
			age: 23
		}
	}
}
</script>

<style lang="scss" scoped></style>
