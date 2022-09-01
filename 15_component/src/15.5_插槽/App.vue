<template>
	<my-slot>
		<h1>匿名插槽内容</h1>
	</my-slot>

	<hr />

	<name-slot>
		<template v-slot:name>
			<h1>leslie</h1>
		</template>
		<template #age>
			<h1>24</h1>
		</template>
		<template #default>
			<h1>cabbage</h1>
		</template>
	</name-slot>
</template>

<script>
import MySlot from '@/15.5_插槽/MySlot.vue'
import NameSlot from '@/15.5_插槽/NameSlot.vue'

export default {
	components: { MySlot, NameSlot }
}
</script>

<style lang="scss" scoped></style>
