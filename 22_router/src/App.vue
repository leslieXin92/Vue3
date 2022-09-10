<template>
	<router-link to="/home"> home </router-link>
	<router-link to="/about"> about </router-link>
  
	<router-view />
</template>

<script>
export default {
	setup() {
		return {}
	}
}
</script>
