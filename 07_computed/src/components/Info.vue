<template>
    <h1>{{ msg }}</h1>
    firstName：<input type="text" v-model="person.firstName" />
    <br />
    lastName：<input type="text" v-model="person.lastName" />
    <br />
    fullName<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue'

export default {
    name: 'Info',
    props: ['msg'],
    setup () {
        let person = reactive({
            firstName: 'firstName',
            lastName: 'lastName',
            age: 23
        })
        // 计算属性简写形式 —— 不考虑计算属性被修改的情况
        person.fullName = computed(() => {
            return `${person.firstName}-${person.lastName}`
        })

        // 计算属性完整写法
        person.fullName = computed({
            get () {
                return `${person.firstName}-${person.lastName}`
            },
            set (newVal) {
                const newNameArr = newVal.split('-')
                person.firstName = newNameArr[0]
                person.lastName = newNameArr[1]
            }
        })
        return { person }
    }
}
</script>

<style scoped>
input {
    margin: 20px;
}
</style>