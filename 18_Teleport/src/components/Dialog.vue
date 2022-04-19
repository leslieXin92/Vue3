<template>
    <button @click="isShow = !isShow"> change dialog </button>
    <teleport to='body'>
        <div class="dialog" v-if="isShow">
            <h1> dialog </h1>
        </div>
    </teleport>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Dialog',
    setup () {
        let isShow = ref(false)
        return { isShow }
    }
}
</script>

<style>
.dialog {
    position: absolute;
    top: 30%;
    left: 40%;
    width: 300px;
    height: 300px;
    text-align: center;
    line-height: 300px;
    background-color: aqua;
}
</style>