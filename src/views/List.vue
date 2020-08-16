<template lang="pug">
div
  h1 List
  hr

  table(v-if="tasks.length")
  p(v-else) No tasks

</template>

<script>
export default {
  computed: {
    tasks () {
      return this.$store.getters.tasks
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
