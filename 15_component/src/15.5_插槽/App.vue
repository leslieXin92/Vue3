<template>
	<!-- 匿名插槽 -->
	<my-slot>
		<h1>匿名插槽内容</h1>
	</my-slot>

	<hr />

	<!-- 具名插槽 -->
	<name-slot>
		<template v-slot:name>
			<h1>{{ info.name }}</h1>
		</template>
		<template #age>
			<h1>{{ info.age }}</h1>
		</template>
		<template #default>
			<h1>cabbage</h1>
		</template>
	</name-slot>

	<hr />

	<!-- 作用域插槽 -->
	<scoped-slot :info="info">
		<template v-slot="slotProps">
			<h1>{{ slotProps.itemKey }} : {{ slotProps.itemValue }}</h1>
		</template>
	</scoped-slot>

	<!-- 独占默认插槽的简写（没有其他具名插槽） -->
	<scoped-slot :info="info" v-slot="slotProps">
		<h1>{{ slotProps.itemKey }} : {{ slotProps.itemValue }}</h1>
	</scoped-slot>
</template>

<script>
import MySlot from '@/15.5_插槽/MySlot.vue'
import NameSlot from '@/15.5_插槽/NameSlot.vue'
import ScopedSlot from '@/15.5_插槽/ScopedSlot.vue'

export default {
	components: { MySlot, NameSlot, ScopedSlot },
	data() {
		return {
			info: {
				name: 'leslie',
				age: 24
			}
		}
	}
}
</script>
