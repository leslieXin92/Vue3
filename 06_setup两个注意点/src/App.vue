<template>
    <Info :msg="msg" @showMsg="showMsg">
        <template v-slot:yahoo>
            <h3> yahoo </h3>
        </template>
        <template v-slot:giao>
            <h3> giao </h3>
        </template>
    </Info>
</template>

<script>
import Info from './components/Info.vue'

export default {
    name: "App",
    components: { Info },
    setup () {
        const msg = 'hello yahoo'

        function showMsg (value) {
            alert(value)
        }

        return { msg, showMsg }
    }
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>