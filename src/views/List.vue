<template lang="pug">
div
  h1 List
  hr

  table(v-if="tasks.length")
    thead
      tr
        th #
        th Title
        th.w-10p Date
        th Description
        th Tags
        th.w-9p Status
        th.w-10p Open
    tbody
      tr(v-for="(task, idx) in tasks" :key="task.id")
        td {{ idx + 1 }}
        td {{ task.title }}
        td {{ new Date(task.date).toLocaleDateString() }}
        td
          div.text.special-fix-width {{ task.description }}
        td теги: {{ task.tags }}
        td {{ task.status }}
        td
          <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Open</router-link>

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
.w-9p
  width: 9%
.w-10p
  width: 10%
.special-fix-width
  max-width: 18rem            // ограничиваем ширину

.text
  white-space: nowrap         // запрещает перенос строк
  text-overflow: ellipsis     // добавляет три точки в конце строки
  overflow: hidden            // скрывает часть непомещающегося текста
</style>
