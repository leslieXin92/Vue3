<template>
	<h1 v-time-format="'YYYY/MM/DD HH:mm:ss'">{{ time }}</h1>
</template>

<script>
export default {
	setup() {
		const time = 123456789
		return { time }
	}
}
</script>
