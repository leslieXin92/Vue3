<template>
    <h1> hello yahoo </h1>
    <h2>name：{{ name }}</h2>
    <h2>age：{{ age }}</h2>
    <h2>job：{{ job.type }}</h2>
    <h2>salary：{{ job.salary }}</h2>
    <button @click="incrementAge"> age++ </button>
    <button @click="incrementSalary"> salary++ </button>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'App',
    setup () {
        const name = 'yahoo'
        let age = ref(23)
        let job = ref({
            type: 'front-end',
            salary: 4000
        })
        function incrementAge () {
            age.value++
        }
        function incrementSalary () {
            job.value.salary += 1000
        }

        return { name, age, job, incrementAge, incrementSalary }
    }
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>