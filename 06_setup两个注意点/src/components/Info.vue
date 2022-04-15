<template>
    <h1>{{ msg }}</h1>
    <h2>name：{{ person.name }}</h2>
    <h2>age：{{ person.age }}</h2>
    <slot name="yahoo" />
    <slot name="giao" />
    <button @click="incrementAge"> age++ </button>
    <button @click="customEvent"> customEvent </button>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: 'Info',
    props: ['msg'],
    emits: ['showMsg'],
    setup (props, context) {
        console.log('setup', this)
        console.log('props', props)
        console.log('context', context)

        const person = reactive({
            name: 'yahoo',
            age: 23
        })

        function incrementAge () {
            person.age++
        }
        function customEvent () {
            context.emit('showMsg', person.name)
        }

        return { person, incrementAge, customEvent }
    },
    beforeCreate () {
        console.log('beforeCreate')
    },
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>