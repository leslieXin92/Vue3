<template>
    <h1>{{ msg }}</h1>
    <button @click="handleChangeIsShowInfo"> change isShowInfo </button>
    <h1>current mouse coordinate is：</h1>
    <h2>X：{{ coordinate.x }}</h2>
    <h2>Y：{{ coordinate.y }}</h2>

    <hr />

    <Info v-if="isShowInfo" />
</template>

<script>
import Info from './components/Info.vue'
import useCoordinate from './hooks/useCoordinate'
import { ref } from 'vue'

export default {
    name: "App",
    components: { Info },
    setup () {
        const coordinate = useCoordinate()
        const msg = 'hello yahoo'
        let isShowInfo = ref(true)

        function handleChangeIsShowInfo () {
            isShowInfo.value = !isShowInfo.value
        }

        return { coordinate, msg, isShowInfo, handleChangeIsShowInfo }
    }
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>