<template>
    <h1> hello yahoo </h1>
    <h2>name：{{ name }}</h2>
    <h2>age：{{ age }}</h2>
    <button @click="showMsg"> showMsg </button>
</template>

<script>
export default {
    name: 'App',
    // 只是测试一下setup，暂时不考虑响应式问题
    setup () {
        // 数据
        const name = 'yahoo'
        let age = 23
        // 方法
        function showMsg () {
            alert(`${name},${age}`)
        }
        // 返回
        return { name, age, showMsg }
    }
}
</script>
