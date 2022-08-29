<template>
	<div id="app">
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script>
import Header from ".//Header"
import Main from ".//Main"
import Footer from ".//Footer"

export default {
	components: {
		Header,
		Main,
		Footer
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-size: 30px;
}
#app {
	padding: 20px;
}
</style>
