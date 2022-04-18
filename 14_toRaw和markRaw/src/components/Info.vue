<template>
    <h1> name：{{ name }} </h1>
    <h1> age：{{ age }} </h1>
    <h1> salary：{{ job.salary.baseSalary + job.salary.commissionSalary }} </h1>
    <h1 v-if="person.girlFriend"> girlFriendName：{{ person.girlFriend?.name }} </h1>
    <h1 v-if="person.girlFriend"> girlFriendAge：{{ person.girlFriend?.age }} </h1>
    <button @click="incrementAge"> incrementAge </button>
    <button @click="incrementSalary"> incrementSalary </button>
    <button @click="showRawPerson"> showRawPerson </button>
    <button @click="addGirlFriend"> addGirlFriend </button>
    <button v-if="person.girlFriend" @click="editGirlFriendName"> editGirlFriendName </button>
    <button v-if="person.girlFriend" @click="incrementGirlFriendAge"> incrementGirlFriendAge </button>
</template>

<script>
import { reactive, toRefs, toRaw, markRaw } from 'vue'

export default {
    name: 'Info',
    setup () {
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

        function incrementAge () {
            person.age++
        }
        function incrementSalary () {
            person.job.salary.baseSalary += 1000
        }
        function showRawPerson () {
            const p = toRaw(person)
            p.age++
            console.log(p) // {name: 'yahoo' …… }
        }
        function addGirlFriend () {
            const girlFriend = { name: 'cabbage', age: 22 }
            person.girlFriend = markRaw(girlFriend)
        }
        function editGirlFriendName () {
            person.girlFriend.name += '~'
        }
        function incrementGirlFriendAge () {
            person.girlFriend.age++
        }

        return {
            person, // 整个交出去，为了5、6行不报错
            ...toRefs(person),
            incrementAge,
            incrementSalary,
            showRawPerson,
            addGirlFriend,
            editGirlFriendName,
            incrementGirlFriendAge
        }
    }
}
</script>

<style scoped>
button {
    margin: 0 10px;
}
</style>