<template>
    <h1>{{ msg }}</h1>
    <button @click="addExclamationMark"> addExclamationMark </button>

    <h1>sum：{{ sum }}</h1>
    <button @click="incrementSum"> sum+1 </button>

    <h1>name：{{ person.name }}</h1>
    <h1>name：{{ person.age }}</h1>
    <h1>firstJobType：{{ person.job.firstJob.type }}</h1>
    <h1>firstJobSalary：{{ person.job.firstJob.salary }}</h1>
    <button @click="addLetter"> addLetter </button>
    <button @click="incrementAge"> age+1 </button>
    <button @click="incrementSalary"> salary+1000 </button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'

export default {
    name: 'Info',
    setup () {
        let sum = ref(0)
        let msg = ref('hello yahoo')
        let person = reactive({
            name: 'yahoo',
            age: 23,
            job: {
                firstJob: {
                    type: 'front end',
                    salary: 4000
                }
            }
        })

        // 情况一：监视ref定义的一个响应式数据
        watch(sum, (newVal, oldVal) => {
            console.log('sum', newVal, oldVal)
        })

        // 情况二：监视ref定义的多个响应式数据
        watch([sum, msg], (newVal, oldVal) => {
            console.log('sum or msg', newVal, oldVal)
        })

        // 情况三：监视reactive定义的响应式数据中的全部数据 (无法正确获取oldValue、强制开启深度监视)
        watch(person, (newVal, oldVal) => {
            console.log('person', newVal, oldVal)
        }, { deep: false }) // 此处deep为false无效

        // 情况四：监视reactive定义的响应式数据中的一个数据
        watch(() => (person.age), (newVal, oldVal) => {
            console.log('person.age', newVal, oldVal)
        })

        // 情况五：监视reactive定义的响应式数据的一些数据
        watch([() => (person.name), () => (person.age)], (newVal, oldVal) => {
            console.log('person.name or person.age', newVal, oldVal)
        })

        // 特殊情况：子节点深层数据的监听要开启深度监视
        watch(() => (person.job), (newVal, oldVal) => {
            console.log('person.job.salary', newVal, oldVal)
        }, { deep: true }) // 监听子节点的深层数据需要开启深度监视

        // watchEffect
        watchEffect(() => {
            const sumTemp = sum
            const personTemp = person
            console.log('watchEffect', sumTemp, personTemp)
        })

        function incrementSum () {
            sum.value++
        }
        function addExclamationMark () {
            msg.value += '！'
        }
        function addLetter () {
            person.name += 'o'
        }
        function incrementAge () {
            person.age++
        }
        function incrementSalary () {
            person.job.firstJob.salary += 1000
        }

        return { sum, msg, person, watchEffect, incrementSum, addExclamationMark, addLetter, incrementAge, incrementSalary }
    }
}
</script>

<style scoped>
input {
    margin: 20px;
}

button {
    margin: 0 10px;
}
</style>