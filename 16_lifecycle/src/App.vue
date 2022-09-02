<template>
	<template v-if="!unmount">
		<keep-alive>
			<home v-if="activated" />
		</keep-alive>
	</template>

	<button @click="unmount = !unmount">unmount Home</button>
	<button @click="activated = !activated">deactivated Home</button>
</template>

<script>
import Home from './Home.vue'

export default {
	name: 'App',
	components: { Home },
	data() {
		return {
			unmount: false,
			activated: true
		}
	}
}
</script>

<style scoped></style>
