<template>
    <h1>name：{{ name }}</h1>
    <h1>age：{{ age }}</h1>
    <h1>firstJobType：{{ job.firstJob.type }}</h1>
    <h1>firstJobSalary：{{ job.firstJob.salary }}</h1>

    <button @click="addLetter"> addLetter </button>
    <button @click="incrementAge"> age+1 </button>
    <button @click="incrementSalary"> salary+1000 </button>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'

export default {
    name: 'Info',
    setup () {
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

        function addLetter () {
            person.name += 'o'
        }
        function incrementAge () {
            person.age++
        }
        function incrementSalary () {
            person.job.firstJob.salary += 1000
        }

        return {
            name: toRef(person, 'name'),
            ...toRefs(person),
            addLetter,
            incrementAge,
            incrementSalary
        }
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