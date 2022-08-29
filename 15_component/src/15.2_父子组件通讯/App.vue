<template>
  <show-msg :msg="msg" />
</template>

<script>
import ShowMsg from "./ShowMsg.vue"

export default {
  components: { ShowMsg },
  data() {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
