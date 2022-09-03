<template>
	<Ref_Reactive name="leslie" msg="hello world" />

	<hr />

	<computed />

	<hr />

	<watch />
</template>

<script>
import Ref_Reactive from './Ref_Reactive.vue'
import Computed from './Computed.vue'
import Watch from './Watch.vue'

export default {
	name: 'App',
	components: { Ref_Reactive, Computed, Watch }
}
</script>

<style scoped></style>
