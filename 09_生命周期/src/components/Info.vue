<template>
    <h1>{{ msg }}</h1>
    <h1> sum：{{ sum }} </h1>
    <button @click="increment"> sum++ </button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
    name: 'Info',
    props: ['msg'],
    setup () {
        let sum = ref(0)

        function increment () {
            sum.value++
        }

        // 通过组合式API形式使用生命周期
        //#region 
        onBeforeMount(() => {
            console.log('onBeforeMount')
        })
        onMounted(() => {
            console.log('onMounted')
        })
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('onUnmounted')
        })
        //#endregion

        return { sum, increment }
    },

    // 通过配置项的形式使用生命周期
    //#region 
    beforeCreate () {
        console.log('beforeCreate')
    },
    created () {
        console.log('create')
    },
    beforeMount () {
        console.log('beforeMount')
    },
    mounted () {
        console.log('mounted')
    },
    beforeUpdate () {
        console.log('beforeUpdate')
    },
    updated () {
        console.log('updated')
    },
    beforeUnmount () {
        console.log('beforeUnmount')
    },
    unmounted () {
        console.log('unmounted')
    }
    //#endregion
}
</script>