<template>
    <div class="app">
        <h1> App组件 </h1>
        <Son />
    </div>
</template>

<script>
import Son from './components/Son.vue'

export default {
    name: "App",
    components: { Son }
}
</script>

<style>
.app {
    padding: 10px;
    background-color: aquamarine;
}
</style>