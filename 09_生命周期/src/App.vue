<template>
    <Info v-if="isShowInfo" :msg="msg" />
    <button @click="handleChangeIsShowInfo"> change isShowInfo </button>
</template>

<script>
import Info from './components/Info.vue'
import { ref } from 'vue'

export default {
    name: "App",
    components: { Info },
    setup () {
        const msg = 'hello yahoo'
        let isShowInfo = ref(true)

        function handleChangeIsShowInfo () {
            isShowInfo.value = !isShowInfo.value
        }

        return { msg, isShowInfo, handleChangeIsShowInfo }
    }
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>