<template>
	<h1>{{ pathName }} Page is Not Found</h1>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
	setup() {
		const route = useRoute()
		const pathName = route.params.pathMatch

		return { pathName }
	}
}
</script>
