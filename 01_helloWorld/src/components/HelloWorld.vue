<template>
    <div>{{ msg }}</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style scoped>
div {
    font-size: 40px;
}
</style>