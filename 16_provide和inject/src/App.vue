<template>
    <div class="app">
        <h1>App组件（祖），{{ name }}--{{ age }}</h1>
        <Son />
    </div>
</template>

<script>
import Son from './components/Son.vue'
import { reactive, toRefs, provide } from 'vue'

export default {
    name: "App",
    components: { Son },
    setup () {
        let person = reactive({
            name: 'yahoo',
            age: 23
        })
        provide('personInfo', person) // 给自己的后代组件传递数据
        return { ...toRefs(person) }
    }
}
</script>

<style>
.app {
    padding: 10px;
    background-color: aquamarine;
}
</style>