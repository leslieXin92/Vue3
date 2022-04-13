<template>
    <!-- 可以有多个根标签 -->
    <img src="./assets/logo.png" />
    <HelloWorld msg="hello yahoo" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
}
</script>

<style scope>
.img {
    width: 100px;
    height: 100px;
}
</style>
