<template>
    <input type="text" v-model="keyWord">
    <h2>{{ keyWord }}</h2>
</template>

<script>
import { customRef } from 'vue'

export default {
    name: "App",
    setup () {
        // 自定义ref
        function myRef (value, delay) {
            let timer
            return customRef((track, trigger) => ({
                get () {
                    track() // 追踪value的变化
                    return value
                },
                set (newVal) {
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        value = newVal
                        trigger() // 重新解析模板
                    }, delay)
                }
            }))
        }

        let keyWord = myRef('hello', 1000)

        return { keyWord }
    }
}
</script>