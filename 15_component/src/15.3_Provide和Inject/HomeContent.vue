<template>
	<h1>name: {{ name }}</h1>
	<h1>age: {{ age }}</h1>
</template>

<script>
export default {
	name: 'HomeContent',
	inject: ['name', 'age']
}
</script>
