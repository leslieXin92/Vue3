<template>
    <Info :msg="msg" />
</template>

<script>
import Info from './components/Info.vue'

export default {
    name: "App",
    components: { Info },
    setup () {
        const msg = 'hello yahoo'

        return { msg }
    }
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>