<template>
	<div class="main">
		<main-banner />
		<main-production-list />
	</div>
</template>

<script>
import MainBanner from './MainBanner.vue'
import MainProductionList from './MainProductionList.vue'

export default {
	components: {
		MainBanner,
		MainProductionList
	}
}
</script>

<style scoped>
.main {
	width: 100%;
}
</style>
