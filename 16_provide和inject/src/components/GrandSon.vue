<template>
    <div class="grandSon">
        <h1>grandSon组件（孙），{{ name }}--{{ age }}</h1>
    </div>
</template>

<script>
import { toRefs, inject } from 'vue'

export default {
    name: "GrandSon",
    setup () {
        let grandSonPerson = inject('personInfo') // 接收数据
        return { ...toRefs(grandSonPerson) }
    }
}
</script>

<style>
.grandSon {
    padding: 10px;
    background-color: palegoldenrod;
}
</style>