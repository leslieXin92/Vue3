<template>
    <h1>sum：{{ sum }}</h1>
    <button @click="incrementSum"> incrementSum </button>

    <hr />

    <h1>name：{{ name }}</h1>
    <h1>age：{{ age }}</h1>
    <h1>salary：{{ job.salary.baseSalary + job.salary.commissionSalary }}</h1>
    <button @click="incrementAge"> incrementAge </button>
    <button @click="incrementSalary"> incrementSalary </button>
</template>

<script>
import { reactive, toRefs, readonly, shallowReadonly, ref } from 'vue'

export default {
    name: 'Info',
    setup () {
        let sum = ref(0)
        let person = reactive({
            name: 'yahoo',
            age: 23,
            job: {
                type: 'front end',
                salary: {
                    baseSalary: 5400,
                    commissionSalary: 700
                }
            }
        })

        sum = readonly(sum)
        person = shallowReadonly(person)

        function incrementSum () {
            sum.value++
        }
        function incrementAge () {
            person.age++
        }
        function incrementSalary () {
            person.job.salary.baseSalary += 1000
        }

        return { sum, ...toRefs(person), incrementSum, incrementAge, incrementSalary }
    }
}
</script>

<style scoped>
button {
    margin: 0 10px;
}
</style>