<template>
    <h1> hello yahoo </h1>
    <h2>name：{{ person.name }}</h2>
    <h2>age：{{ person.age }}</h2>
    <h2>job：{{ person.job.type }}</h2>
    <h2>salary：{{ person.job.salary }}</h2>
    <h2>learnList：{{ person.learnList }}</h2>
    <button @click="incrementAge"> age++ </button>
    <button @click="incrementSalary"> salary++ </button>
    <button @click="changeLearnList"> changeLearnList </button>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: 'App',
    setup () {
        const person = reactive({
            name: 'yahoo',
            age: 23,
            job: {
                type: 'front-end',
                salary: 4000
            },
            learnList: ['Vue3', 'TS', 'JS']
        })

        function incrementAge () {
            person.age++
        }
        function incrementSalary () {
            person.job.salary += 1000
        }
        function changeLearnList () {
            person.learnList[2] = person.learnList[2] === 'JS' ? 'JQuery' : 'JS'
        }

        return { person, incrementAge, incrementSalary, changeLearnList }
    }
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>