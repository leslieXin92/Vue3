<template>
	<Ref_Reactive name="leslie" msg="hello world" />

	<hr />

	<computed />

	<hr />

	<watch-effect />

	<hr />

	<watch />

	<hr />

	<lifecycle />
</template>

<script>
import Ref_Reactive from './Ref_Reactive.vue'
import Computed from './Computed.vue'
import WatchEffect from './WatchEffect.vue'
import Watch from './Watch.vue'
import Lifecycle from './Lifecycle.vue'

export default {
	name: 'App',
	components: { Ref_Reactive, Computed, WatchEffect, Watch, Lifecycle }
}
</script>

<style scoped></style>
