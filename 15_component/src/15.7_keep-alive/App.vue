<template>
	<button
		v-for="item in tabs"
		:key="item"
		@click="tabClick(item)"
		:class="{ active: currentTab === item }"
	>
		{{ item }}
	</button>

	<keep-alive include="About">
		<component :is="currentTab" />
	</keep-alive>
</template>

<script>
import Home from '@/15.7_keep-alive/Home.vue'
import About from '@/15.7_keep-alive/About.vue'
import Category from '@/15.7_keep-alive/Category.vue'

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
		}
	}
}
</script>

<style scoped>
.active {
	color: red;
}
</style>
