<template>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <input type="number" v-model.number="num" />
  <button @click="incrementN">+N</button>
   <button @click="decrementN">-N</button>
</template>

<script>
export default {
  emits: ["add", "sub"],
  data() {
    return {
      num: 1
    }
  },
  methods: {
    increment() {
      this.$emit("add")
    },
    decrement() {
      this.$emit("sub")
    },
    incrementN() {
      this.$emit("addN", this.num)
    },
    decrementN() {
      this.$emit("subN", this.num)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>