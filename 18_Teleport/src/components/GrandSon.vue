<template>
    <div class="grandSon">
        <h1> grandSon组件 </h1>
        <Dialog />
    </div>
</template>

<script>
import Dialog from './Dialog.vue'

export default {
    name: "GrandSon",
    components: { Dialog }
}
</script>

<style>
.grandSon {
    padding: 10px;
    background-color: palegoldenrod;
}
</style>