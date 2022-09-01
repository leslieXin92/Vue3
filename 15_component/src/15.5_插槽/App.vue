<template>
	<my-slot>
		<h1>slot</h1>
	</my-slot>
</template>

<script>
import MySlot from '@/15.5_插槽/MySlot.vue'

export default {
	components: { MySlot }
}
</script>

<style lang="scss" scoped></style>
