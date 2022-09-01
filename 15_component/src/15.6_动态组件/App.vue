<template>
	<button
		v-for="item in tabs"
		:key="item"
		@click="handleClick(item)"
		:class="{ active: currentTab === item }"
	>
		{{ item }}
	</button>

	<component :is="currentTab" />
</template>

<script>
import Home from '@/15.6_动态组件/Home.vue'
import About from '@/15.6_动态组件/About.vue'
import Category from '@/15.6_动态组件/Category.vue'

export default {
	components: { Home, About, Category },
	data() {
		return {
			tabs: ['home', 'about', 'category'],
			currentTab: 'home'
		}
	},
	methods: {
		handleClick(item) {
			this.currentTab = item
		}
	}
}
</script>

<style scoped>
.active {
	color: red;
}
</style>
