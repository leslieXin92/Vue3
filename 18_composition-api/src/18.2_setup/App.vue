<template>
	<Ref_Reactive name="leslie" msg="hello world" />

	<hr />

	<computed />

	<hr />

	<watch-effect />

	<hr />
</template>

<script>
import Ref_Reactive from './Ref_Reactive.vue'
import Computed from './Computed.vue'
import WatchEffect from './WatchEffect.vue'

export default {
	name: 'App',
	components: { Ref_Reactive, Computed, WatchEffect }
}
</script>

<style scoped></style>
