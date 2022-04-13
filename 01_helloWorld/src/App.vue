<template>
    <!-- 可以有多个根标签 -->
    <img src="./assets/logo.png" />
    <div>{{ msg }}</div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            msg: 'hello yahoo'
        }
    },
}
</script>

<style scope>
.img {
    width: 100px;
    height: 100px;
}

div {
    font-size: 40px;
}
</style>
