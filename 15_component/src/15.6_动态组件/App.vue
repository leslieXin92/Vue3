<template>
	<button
		v-for="item in tabs"
		:key="item"
		@click="tabClick(item)"
		:class="{ active: currentTab === item }"
	>
		{{ item }}
	</button>

	<component :is="currentTab" :currentTab="currentTab" @pageClick="pageClick" />
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
		tabClick(item) {
			this.currentTab = item
		},
		pageClick(currentTab) {
			console.log(`"${currentTab}" has been clicked`)
		}
	}
}
</script>

<style scoped>
.active {
	color: red;
}
</style>
