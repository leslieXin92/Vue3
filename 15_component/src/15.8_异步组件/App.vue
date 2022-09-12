<template>
	<home />
	<suspense>
		<template #default>
			<async-category />
		</template>
		<template #fallback>
			<h1>应急插槽</h1>
		</template>
	</suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Home from '@/15.8_异步组件/Home.vue'
const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))

export default {
	components: { Home, AsyncCategory }
}
</script>
