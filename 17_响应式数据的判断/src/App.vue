<template>
    <h1>hello yahoo</h1>
</template>

<script>
import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'

export default {
    name: "App",
    setup () {
        let sum = ref(0)
        let person = reactive({
            name: 'yahoo',
            age: 23
        })
        let personTemp = readonly(person)

        console.log(isRef(sum)) // true
        console.log(isReactive(person)) // true
        console.log(isReadonly(personTemp)) // true
        console.log(isProxy(person)) // true
        console.log(isProxy(personTemp)) // true

        return { ...toRefs(person) }
    }
}
</script>