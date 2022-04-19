<template>
    <div class="son">
        <h1> Son组件 </h1>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "Son",
    async setup () {
        let sum = ref(0)
        const asySum = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(sum)
            }, 3000)
        })

        return await asySum
    }
}
</script>

<style>
.son {
    padding: 10px;
    background-color: palevioletred;
}
</style>