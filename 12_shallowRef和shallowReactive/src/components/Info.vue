<template>
    <h1>jobType：{{ type }}</h1>
    <h1>jobSalary：{{ salary.baseSalary + salary.commissionSalary }}</h1>
    <h1>age：{{ person.age }}</h1>
    <button @click="editType"> edit type </button>
    <button @click="incrementSalary"> increment salary </button>
    <button @click="incrementAge"> increment age </button>
</template>

<script>
import { toRefs, shallowReactive, shallowRef } from 'vue'

export default {
    name: 'Info',
    setup () {
        // 只有第一层的数据是响应式
        const job = shallowReactive({
            type: 'front end ',
            salary: {
                baseSalary: 5400,
                commissionSalary: 700
            }
        })

        // shallowRef定义的对象没有响应式
        const person = shallowRef({
            name: 'yahoo',
            age: 23
        })

        function editType () {
            job.type += '！'
        }
        function incrementSalary () {
            job.salary.baseSalary += 1000
        }
        function incrementAge () {
            person.value.age++
        }

        return { ...toRefs(job), person, editType, incrementSalary, incrementAge }
    }
}
</script>

<style scoped>
button {
    margin: 0 10px;
}
</style>