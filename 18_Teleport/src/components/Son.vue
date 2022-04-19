<template>
    <div class="son">
        <h1> Son组件 </h1>
        <GrandSon />
    </div>
</template>

<script>
import GrandSon from './GrandSon.vue'

export default {
    name: "Son",
    components: { GrandSon }
}
</script>

<style>
.son {
    padding: 10px;
    background-color: palevioletred;
}
</style>