<template>
    <div class="app">
        <h1> App组件 </h1>
        <Suspense>
            <template v-slot:default>
                <Son />
            </template>
            <template v-slot:fallback>
                <h1> 加载中…… </h1>
            </template>
        </Suspense>
    </div>
</template>

<script>
// import Son from './components/Son.vue' // 静态引入
import { defineAsyncComponent } from 'vue'
const Son = defineAsyncComponent(() => import('./components/Son.vue')) // 动态引入

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