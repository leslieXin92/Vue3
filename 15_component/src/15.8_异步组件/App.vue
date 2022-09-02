<template>
	<home />
	<async-category />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Home from '@/15.8_异步组件/Home.vue'
const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))

export default {
	components: { Home, AsyncCategory }
}
</script>

<style lang="scss" scoped></style>
