<template>
	<router-link to="/home" replace active-class="active"> home </router-link>
	<router-link to="/about" replace active-class="active"> about </router-link>
	<router-link :to="`/user/${username}`" replace active-class="active"> user </router-link>
	<button @click="skipLover">lover</button>
	<router-link to="/category">category</router-link>

	<router-view v-slot="props">
		<transition>
			<keep-alive>
				<component :is="props.Component" />
			</keep-alive>
		</transition>
	</router-view>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
	setup() {
		const username = 'leslie'

		const router = useRouter()

		const skipLover = () => {
			router.push({
				path: '/lover',
				query: {
					name: 'cabbage',
					age: 23
				}
			})
		}

		return { username, skipLover }
	}
}
</script>

<style scoped>
.active {
	color: red;
}
</style>
