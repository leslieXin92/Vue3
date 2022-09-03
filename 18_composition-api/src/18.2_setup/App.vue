<template>
	<Ref_Reactive name="leslie" msg="hello world" />

	<hr />

	<computed />
</template>

<script>
import Ref_Reactive from './Ref_Reactive.vue'
import Computed from './Computed.vue'

export default {
	name: 'App',
	components: { Ref_Reactive, Computed }
}
</script>

<style scoped></style>
